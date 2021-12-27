"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = require("mongodb").ObjectID;

var UsuarioSchema = Schema(
  {
    _id: ObjectId,
    nombres: String,
    movil: String,
    clave: String,
    email: String,
    uid: String,
    perfil: { type: Schema.ObjectId, ref: "Perfil" },

    estado: Boolean,
    feCrea: Date,
    usuCrea: { type: Schema.ObjectId, ref: "Usuario" },
    feActualiza: Date,
    usuActualiza: { type: Schema.ObjectId, ref: "Usuario" },
  },
  { collection: "usuario" }
);

module.exports = mongoose.model("Usuario", UsuarioSchema);
