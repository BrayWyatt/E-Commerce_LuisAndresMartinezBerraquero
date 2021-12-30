"use strict";

var express = require("express");
var UsuarioController = require("../controllers/usuario");
const md_auth = require('../middlewares/authenticated');

var api = express.Router();
api.post("/login", UsuarioController.loginUsuario);
api.post("/", UsuarioController.insUsuario);
api.put("/:id", md_auth.ensureAuth, UsuarioController.updUsuario);

module.exports = api;
