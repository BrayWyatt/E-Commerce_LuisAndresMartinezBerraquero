'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario');

var api = express.Router();
api.post('/login', UsuarioController.loginUsuario);

module.exports = api;