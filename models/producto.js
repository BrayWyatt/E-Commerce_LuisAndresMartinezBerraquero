"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = require("mongodb").ObjectID;

var ProductoSchema = Schema(
  {
    _id: ObjectId,
    titulo: String,
    descripcion: String,
    precio: Number,
    categoria: { type: Schema.ObjectId, ref: "Categoria" },
    vendido: Number,

    estado: Boolean,
    feCrea: Date,
    usuCrea: { type: Schema.ObjectId, ref: "Usuario" },
    feActualiza: Date,
    usuActualiza: { type: Schema.ObjectId, ref: "Usuario" },
  },
  { collection: "producto" }
);

module.exports = mongoose.model("Producto", ProductoSchema);
1