"use strict";

var Categoria = require("../models/categoria");
var objRpta = {};
var listRpta;
var rpta;

function listCategoria(req, res) {
  Categoria.find().exec((err, categoria) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: JSON.stringify(err) });
    } else {
      if (!categoria) {
        res.status(404).send({ message: "No hay lista de categorias" });
      } else {
        rpta = listConvert(categoria);
        res.status(200).send({ rpta });
      }
    }
  });
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
  objRpta.Abreviatura = item.abreviatura;
  objRpta.Descripcion = item.descripcion;
  return objRpta;
}

module.exports = {
    listCategoria: listCategoria,
};
