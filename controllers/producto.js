"use strict";

var Producto = require("../models/producto");
var objRpta = {};
var listRpta;
var rpta;

function listProducto(req, res) {
  Producto.find().exec((err, producto) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: JSON.stringify(err) });
    } else {
      if (!producto) {
        res.status(404).send({ message: "No hay lista de productos" });
      } else {
        rpta = listConvert(producto);
        res.status(200).send({ rpta });
      }
    }
  });
}

//#region [Util]
// Formateando
function listConvert(items) {
  listRpta = [];
  items.forEach((item) => {
    listRpta.push(getConvert(item));
  });
  return listRpta;
}

function getConvert(item) {
  objRpta = {};
  objRpta.Id = item._id;
  objRpta.Titulo = item.titulo;
  objRpta.Descripcion = item.descripcion;
  objRpta.Precio = item.precio;
  objRpta.Categoria = item.categoria;
  objRpta.Vendido = item.vendido;
  objRpta.Estado = item.estado;
  objRpta.FeCrea = item.feCrea;
  objRpta.UsuCrea = item.usuCrea;
  objRpta.FeActualiza = item.feActualiza;
  objRpta.UsuActualiza = item.usuActualiza;
  return objRpta;
}

module.exports = {
  listProducto: listProducto,
};
