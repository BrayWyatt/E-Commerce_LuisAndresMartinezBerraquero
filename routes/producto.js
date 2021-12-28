"use strict";

var express = require("express");
var ProductoController = require("../controllers/producto");
const md_auth = require('../middlewares/authenticated');

var api = express.Router();
api.get("", md_auth.ensureAuth, ProductoController.listProducto);
api.post("/", ProductoController.insProducto);
api.put("/:id", md_auth.ensureAuth, ProductoController.updProducto);
api.delete('/:idProducto/:idUsuario', ProductoController.delProducto);
api.get("/:idCategoria", md_auth.ensureAuth, ProductoController.listProductoByCategoria);
api.get('/:vendido/:precio/:titulo/:descripcion', ProductoController.listProductoFiltro);
module.exports = api;