"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = require("mongodb").ObjectID;

var FacturaSchema = Schema(
  {
    _id: ObjectId,
    serie: String,
    cliente: { type: Schema.ObjectId, ref: "Usuario" },
    direccion: String,
    NIF: String,
    baseImponible: Number,
    IVA: Number, 
    total: Number,

    estado: Boolean,
    feCrea: Date,
    usuCrea: { type: Schema.ObjectId, ref: "Usuario" },
    feActualiza: Date,
    usuActualiza: { type: Schema.ObjectId, ref: "Usuario" },
  },
  { collection: "factura" }
);

module.exports = mongoose.model("Factura", FacturaSchema);
