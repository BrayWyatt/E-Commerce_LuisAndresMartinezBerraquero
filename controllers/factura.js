"use strict";

var Factura = require("../models/factura");
require("../models/facturaDetalle");
var objRpta = {};
var rpta = {};
var path = require("path");
var mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectID;
var FacturaDetalleController = require("../controllers/facturaDetalle");

async function insFactura(req, res) {
  var params = req.body;
  var factura = new Factura();
  try {
    factura.serie = params.Serie;
    factura.cliente = mongoose.Types.ObjectId(params.Cliente);
    factura.direccion = params.Direccion;
    factura.NIF = params.NIF;
    factura.baseImponible = params.BaseImponible;
    factura.IVA = params.IVA;
    factura.total = params.Total;

    if (params.Id && mongoose.Types.ObjectId.isValid(params.Id)) {
      factura._id = params.Id;
      factura.feActualiza = new Date();
      factura.usuActualiza = mongoose.Types.ObjectId(params.Cliente);
    } else {
      factura._id = new ObjectId();
      factura.estado = true;
      factura.feCrea = new Date();
      factura.usuCrea = mongoose.Types.ObjectId(params.Cliente);
      factura.feActualiza = null;
      factura.usuActualiza = null;
    }

    let rptaFactura = await Factura.updateOne({ _id: factura._id }, factura, {
      upsert: true,
    });

    let rptaFacturaDetalle = await FacturaDetalleController.insFacturaDetalle(
      params.Detalle,
      factura._id,
      factura.cliente
    );

    if (rptaFacturaDetalle == true) {
      res.status(204).send();
    } else {
      res
        .status(400)
        .send({ message: "Error al guardar el detalle de factura" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Error al guardar la factura",
      detail: JSON.stringify(err),
    });
  }
}

module.exports = {
  insFactura,
};
