"use strict";

var express = require("express");
var FacturaDetalleController = require("../controllers/facturaDetalle");
const md_auth = require("../middlewares/authenticated");

var api = express.Router();
api.get("/", md_auth.ensureAuth, FacturaDetalleController.listFacturaDetalle);
module.exports = api;
