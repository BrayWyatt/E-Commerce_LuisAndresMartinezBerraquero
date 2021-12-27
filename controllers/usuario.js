"use strict";

var Usuario = require("../models/usuario");
require("../models/perfil");
var objRpta = {};
var rpta = {};
var path = require("path");
var mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectID;
var jwt = require("../services/jwt");

function loginUsuario(req, res) {
  var params = req.body;

  if (params.Movil != undefined && params.Clave != undefined) {
    Usuario.findOne({ movil: params.Movil }, (err, usuario) => {
      if (err) {
        res
          .status(500)
          .send({ message: "Error on Request", detail: JSON.stringify(err) });
      } else {
        if (!usuario) {
          res.status(404).send({ message: "Usuario desconocido", detail: "" });
        } else {
          if (usuario.clave == params.Clave) {
            rpta = getConvert(usuario);
            res
              .status(200)
              .send({ usuario: rpta, token: jwt.createToken(usuario) });
          } else {
            res.status(404).send({ message: "Clave incorrecta", detail: "" });
          }
        }
      }
    }).populate({ path: "perfil" });
  } else {
    res.status(400).send({ message: "Parámetros incompletos", detail: "" });
  }
}

//#region [Util]
// Formatea
function getConvert(item) {
    objRpta = {};
    objRpta.Id = item._id;
    objRpta.Nombres = item.nombres;
    objRpta.Movil = item.movil;
    objRpta.Email = item.email;

    objRpta.Estado = item.estado;

    objRpta.Perfil = {};
    objRpta.Perfil.Id = item.perfil._id;
    objRpta.Perfil.Abreviatura = item.perfil.abreviatura;
    objRpta.Perfil.Descripcion = item.perfil.descripcion;
    return objRpta;
}
//#endregion

module.exports = {
  loginUsuario,
};
