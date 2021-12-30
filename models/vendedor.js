'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

var VendedorSchema = Schema(
  {
    _id: ObjectId,
    abreviatura: Number,
    descripcion: String,
  },
  { collection: 'vendedor' }
);

module.exports = mongoose.model('Vendedor', VendedorSchema);
