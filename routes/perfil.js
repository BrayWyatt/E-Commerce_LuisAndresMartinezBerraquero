"use strict";

var express = require("express");
var PerfilController = require("../controllers/perfil");
const md_auth = require('../middlewares/authenticated');

var api = express.Router();
api.get("", md_auth.ensureAuth, PerfilController.listPerfil);

module.exports = api;
