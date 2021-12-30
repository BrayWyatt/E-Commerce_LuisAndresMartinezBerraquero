"use strict";

var express = require("express");
var ProductoController = require("../controllers/producto");
const md_auth = require('../middlewares/authenticated');

var api = express.Router();
api.get("", md_auth.ensureAuth, ProductoController.listProducto);
api.post("/", ProductoController.insProducto);
api.put("/:id", md_auth.ensureAuth, ProductoController.updProducto);
api.delete('/:idProducto/:idUsuario', md_auth.ensureAuth, ProductoController.delProducto);
api.get("/categoria/:idCategoria", md_auth.ensureAuth, ProductoController.listProductoByCategoria);
api.get('/:vendido/:precio/:titulo/:descripcion', ProductoController.listProductoFiltro);
api.get("/vendedor/:idVendedor", md_auth.ensureAuth, ProductoController.listProductoByVendedor);
module.exports = api;