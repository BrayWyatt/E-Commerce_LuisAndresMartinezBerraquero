"use strict";

var express = require("express");
var FacturaController = require("../controllers/factura");
const md_auth = require("../middlewares/authenticated");

var api = express.Router();
api.post("/", md_auth.ensureAuth, FacturaController.insFactura);
module.exports = api;
