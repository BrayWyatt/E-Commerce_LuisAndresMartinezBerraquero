"use strict";

var FacturaDetalle = require("../models/facturaDetalle");
var mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectID;

async function insFacturaDetalle(LstFacturaDetalle, IdFactura, IdCliente) {
  try {
    var facturaDetalle = new FacturaDetalle();
    for (let i = 0; i < LstFacturaDetalle.length; i++) {
      facturaDetalle = new FacturaDetalle();

      if (LstFacturaDetalle[i].Id == null) {
        facturaDetalle._id = new ObjectId();
        facturaDetalle.producto = mongoose.Types.ObjectId(
          LstFacturaDetalle[i].Producto
        );
        facturaDetalle.cantidad = LstFacturaDetalle[i].Cantidad;
        facturaDetalle.precioUnitario = LstFacturaDetalle[i].PrecioUnitario;
        facturaDetalle.precioTotal = LstFacturaDetalle[i].PrecioTotal;
        facturaDetalle.factura = mongoose.Types.ObjectId(IdFactura);

        facturaDetalle.estado = true;
        facturaDetalle.feCrea = new Date();
        facturaDetalle.usuCrea = mongoose.Types.ObjectId(IdCliente);
        facturaDetalle.feActualiza = null;
        facturaDetalle.usuActualiza = null;
      } else {
        facturaDetalle._id = mongoose.Types.ObjectId(LstFacturaDetalle[i].Id);
        facturaDetalle.estado = LstFacturaDetalle[i].Estado;
        facturaDetalle.feActualiza = new Date();
        facturaDetalle.usuActualiza = mongoose.Types.ObjectId(IdCliente);
      }

      let rpta = await FacturaDetalle.updateOne(
        { _id: facturaDetalle._id },
        facturaDetalle,
        { upsert: true }
      );
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  insFacturaDetalle,
};
