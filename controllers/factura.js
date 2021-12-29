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
    factura._id = new ObjectId();
    factura.serie = params.Serie;
    factura.cliente = mongoose.Types.ObjectId(params.Cliente);
    factura.direccion = params.Direccion;
    factura.NIF = params.NIF;
    factura.baseImponible = params.BaseImponible;
    factura.IVA = params.IVA;
    factura.total = params.Total;

    factura.estado = true;
    factura.feCrea = new Date();
    factura.usuCrea = mongoose.Types.ObjectId(params.Cliente);
    factura.feActualiza = null;
    factura.usuActualiza = null;

    let rptaFactura = await Factura.updateOne({ _id: factura._id }, factura, {
      upsert: true,
    });

    let rptaFacturaDetalle = await FacturaDetalleController.insFacturaDetalle(
      params.Detalle,
      factura._id,
      factura.cliente
    );

    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Error al guardar el anuncio",
      detail: JSON.stringify(err),
    });
  }
}

module.exports = {
  insFactura,
};
