"use strict";

var FacturaDetalle = require("../models/facturaDetalle");
var mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectID;
var objRpta = {};
var listRpta;
var rpta;

async function insFacturaDetalle(LstFacturaDetalle, IdFactura, IdCliente) {
  try {
    var facturaDetalle = new FacturaDetalle();
    for (let i = 0; i < LstFacturaDetalle.length; i++) {
      facturaDetalle = new FacturaDetalle();

      facturaDetalle.producto = mongoose.Types.ObjectId(
        LstFacturaDetalle[i].Producto
      );
      facturaDetalle.cantidad = LstFacturaDetalle[i].Cantidad;
      facturaDetalle.precioUnitario = LstFacturaDetalle[i].PrecioUnitario;
      facturaDetalle.precioTotal = LstFacturaDetalle[i].PrecioTotal;

      if (LstFacturaDetalle[i].Id == null) {
        facturaDetalle._id = new ObjectId();
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

function listFacturaDetalle(req, res) {
  FacturaDetalle.find()
    .populate([
      {
        path: "producto",
        models: "Producto",
      },
    ])
    .exec((err, facturaDetalle) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: JSON.stringify(err) });
      } else {
        if (!facturaDetalle) {
          res.status(404).send({ message: "No hay lista de factura detalle" });
        } else {
          rpta = listConvert(facturaDetalle);
          res.status(200).send({ rpta });
        }
      }
    });
}

async function listFacturaById(idFactura) {
  var rpta = await FacturaDetalle.find({ factura: idFactura }).populate([
    {
      path: "producto",
      models: "Producto",
    },
  ]);
  return rpta;
}

//#region [Util]
// Formateando
function listConvert(items) {
  listRpta = [];
  items.forEach((item) => {
    listRpta.push(getConvert(item));
  });
  return listRpta;
}

function getConvert(item) {
  objRpta = {};
  objRpta.Id = item._id;
  if (item.producto !== undefined) {
    objRpta.Producto = {};
    objRpta.Producto.Id = item.producto._id;
    objRpta.Producto.Titulo = item.producto.titulo;
    objRpta.Producto.Descripcion = item.producto.descripcion;
  }

  objRpta.Cantidad = item.cantidad;
  objRpta.PrecioUnitario = item.precioUnitario;
  objRpta.PrecioTotal = item.precioTotal;
  objRpta.Factura = item.factura;

  objRpta.Estado = item.estado;
  objRpta.FeCrea = item.feCrea;
  objRpta.UsuCrea = item.usuCrea;
  objRpta.FeActualiza = item.feActualiza;
  objRpta.UsuActualiza = item.usuActualiza;
  return objRpta;
}
//#endregion
module.exports = {
  insFacturaDetalle,
  listFacturaDetalle,
  listFacturaById,
};
