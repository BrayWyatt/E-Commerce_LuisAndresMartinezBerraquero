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

function insUsuario(req, res) {
  var usuario = new Usuario();
  var params = req.body;

  usuario._id = new ObjectId();
  usuario.nombres = params.Nombres;
  usuario.movil = params.Movil;
  usuario.clave = params.Clave;
  usuario.email = params.Email.toLowerCase();
  usuario.perfil = mongoose.Types.ObjectId(params.Perfil);
  usuario.estado = true;
  usuario.feCrea = new Date();
  usuario.usuCrea = mongoose.Types.ObjectId(params.UsuCrea);
  usuario.feActualiza = null;
  usuario.usuActualiza = null;

  if (usuario.nombres != null) {
      try {
          usuario.save((err, usuarioStored) => {
              if (err) {
                  res.status(500).send({
                      message: "Error al guardar el usuario",
                      detail: JSON.stringify(err),
                  });
              } else {
                  if (!usuarioStored) {
                      res
                          .status(404)
                          .send({ message: "No se ha registrado el usuario", detail: "" });
                  } else {
                      usuarioStored.populate("perfil", function (err) {
                          rpta = getConvert(usuarioStored);
                          res
                              .status(200)
                              .send({ usuario: rpta, token: jwt.createToken(usuario) });
                      });
                  }
              }
          });
      } catch (err) {
          res.status(500).send({
              message: "Error al guardar el usuario",
              detail: JSON.stringify(err),
          });
      }
  } else {
      res.status(400).send({
          message: "Ingresar todos los campos, Nombres, Email",
      });
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
  insUsuario,
};
