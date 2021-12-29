"use strict";

var Factura = require("../models/factura");
require("../models/facturaDetalle");
var objRpta = {};
var objRptaSub = {};
var listRpta;
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

async function listFacturaByUser(req, res) {
  var idUsuario = req.params.idUsuario;

  Factura.find({
    cliente: mongoose.Types.ObjectId(idUsuario),
  })
    .populate([
      {
        path: "cliente",
        models: "Usuario",
      },
    ])
    .exec(async (err, factura) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: JSON.stringify(err) });
      } else {
        if (!factura) {
          res
            .status(404)
            .send({ message: "No hay lista de facturas para el cliente" });
        } else {
          rpta = await listConvert(factura);
          res.status(200).send({ rpta });
        }
      }
    });
}

//#region [Util]
// Formateando
async function listConvert(items) {
  listRpta = [];
  for (const item of items) {
    await listRpta.push(await getConvert(item));
  }
  return listRpta;
}

async function getConvert(item) {
  objRpta = {};
  objRpta.Id = item._id;
  objRpta.Serie = item.serie;

  if (item.cliente !== undefined) {
    objRpta.Cliente = {};
    objRpta.Cliente.Id = item.cliente._id;
    objRpta.Cliente.Nombres = item.cliente.nombres;
    objRpta.Cliente.Movil = item.cliente.movil;
    objRpta.Cliente.Email = item.cliente.email;
  }

  objRpta.Direccion = item.direccion;
  objRpta.NIF = item.NIF;
  objRpta.BaseImponible = item.baseImponible;
  objRpta.IVA = item.IVA;
  objRpta.Total = item.total;

  item.detalle = await FacturaDetalleController.listFacturaById(item._id);

  if (item.detalle != undefined) {
    objRpta.Detalle = [];
    item.detalle.forEach((item_sub) => {
      objRptaSub = {};

      objRptaSub.Id = item_sub._id;
      if (item_sub.producto !== undefined) {
        objRptaSub.Producto = {};
        objRptaSub.Producto.Id = item_sub.producto._id;
        objRptaSub.Producto.Titulo = item_sub.producto.titulo;
        objRptaSub.Producto.Descripcion = item_sub.producto.descripcion;
      }

      objRptaSub.Cantidad = item_sub.cantidad;
      objRptaSub.PrecioUnitario = item_sub.precioUnitario;
      objRptaSub.PrecioTotal = item_sub.precioTotal;
      objRptaSub.Factura = item_sub.factura;

      objRptaSub.Estado = item_sub.estado;
      objRptaSub.FeCrea = item_sub.feCrea;
      objRptaSub.UsuCrea = item_sub.usuCrea;
      objRptaSub.FeActualiza = item_sub.feActualiza;
      objRptaSub.UsuActualiza = item_sub.usuActualiza;

      objRpta.Detalle.push(objRptaSub);
    });
  }

  objRpta.Estado = item.estado;
  objRpta.FeCrea = item.feCrea;
  objRpta.UsuCrea = item.usuCrea;
  objRpta.FeActualiza = item.feActualiza;
  objRpta.UsuActualiza = item.usuActualiza;
  return objRpta;
}
//#endregion

module.exports = {
  insFactura,
  listFacturaByUser,
};
