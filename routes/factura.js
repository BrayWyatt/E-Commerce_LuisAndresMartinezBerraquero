"use strict";

var express = require("express");
var FacturaController = require("../controllers/factura");
const md_auth = require("../middlewares/authenticated");

var api = express.Router();
api.post("/", md_auth.ensureAuth, FacturaController.insFactura);
api.get("/:idUsuario", md_auth.ensureAuth, FacturaController.listFacturaByUser);
module.exports = api;
