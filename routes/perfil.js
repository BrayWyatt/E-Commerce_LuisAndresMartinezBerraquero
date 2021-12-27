'use strict'

var express = require('express');
var PerfilController = require('../controllers/perfil');

var api = express.Router();
api.get('', PerfilController.listPerfil);

module.exports = api;