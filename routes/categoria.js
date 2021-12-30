"use strict";

var express = require("express");
var CategoriaController = require("../controllers/categoria");
const md_auth = require('../middlewares/authenticated');

var api = express.Router();
api.get("", md_auth.ensureAuth, CategoriaController.listCategoria);

module.exports = api;
