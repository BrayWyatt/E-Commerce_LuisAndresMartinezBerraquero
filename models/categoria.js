'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

var CategoriaSchema = Schema(
  {
    _id: ObjectId,
    abreviatura: Number,
    descripcion: String,
  },
  { collection: 'categoria' }
);

module.exports = mongoose.model('Categoria', CategoriaSchema);
