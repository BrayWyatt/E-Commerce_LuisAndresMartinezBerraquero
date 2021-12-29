"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = require("mongodb").ObjectID;

var FacturaDetalleSchema = Schema(
  {
    _id: ObjectId,
    producto: { type: Schema.ObjectId, ref: "Producto" },
    cantidad: Number,
    precioUnitario: Number,
    precioTotal: Number,
    factura: { type: Schema.ObjectId, ref: "Factura" },

    estado: Boolean,
    feCrea: Date,
    usuCrea: { type: Schema.ObjectId, ref: "Usuario" },
    feActualiza: Date,
    usuActualiza: { type: Schema.ObjectId, ref: "Usuario" },
  },
  { collection: "facturaDetalle" }
);

module.exports = mongoose.model("FacturaDetalle", FacturaDetalleSchema);
