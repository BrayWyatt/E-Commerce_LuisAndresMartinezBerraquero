'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

var PerfilSchema = Schema(
  {
    _id: ObjectId,
    abreviatura: Number,
    descripcion: String,
  },
  { collection: 'perfil' }
);

module.exports = mongoose.model('Perfil', PerfilSchema);
