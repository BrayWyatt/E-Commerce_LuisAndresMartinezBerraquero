"use strict";

var Perfil = require("../models/perfil");
var objRpta = {};
var listRpta;
var rpta;

function listPerfil(req, res) {
  Perfil.find().exec((err, perfil) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: JSON.stringify(err) });
    } else {
      if (!perfil) {
        res.status(404).send({ message: "No hay lista de perfiles" });
      } else {
        rpta = listConvert(perfil);
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
  listPerfil,
};
