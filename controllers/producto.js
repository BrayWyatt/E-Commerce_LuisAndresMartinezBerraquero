"use strict";

var Producto = require("../models/producto");
var objRpta = {};
var listRpta;
var rpta;
var mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectID;

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

function insProducto(req, res) {
  var producto = new Producto();
  var params = req.body;

  producto._id = new ObjectId();
  producto.titulo = params.Titulo;
  producto.descripcion = params.Descripcion;
  producto.precio = params.Precio;
  producto.categoria = mongoose.Types.ObjectId(params.Categoria);
  producto.vendido = params.Vendido;

  producto.estado = true;
  producto.feCrea = new Date();
  producto.usuCrea = mongoose.Types.ObjectId(params.UsuCrea);
  producto.feActualiza = null;
  producto.usuActualiza = null;

  if (producto.titulo != null && producto.descripcion != null) {
    try {
      producto.save((err, productoStored) => {
        if (err) {
          res.status(500).send({
            message: "Error al guardar el producto",
            detail: JSON.stringify(err),
          });
        } else {
          if (!productoStored) {
            res
              .status(404)
              .send({ message: "No se ha registrado el producto", detail: "" });
          } else {
            productoStored.populate("categoria", function (err) {
              rpta = getConvert(productoStored);
              res.status(200).send({ producto: rpta });
            });
          }
        }
      });
    } catch (err) {
      res.status(500).send({
        message: "Error al guardar el producto",
        detail: JSON.stringify(err),
      });
    }
  } else {
    res.status(400).send({
      message: "Ingresar todos los campos, titulo, descripcion",
    });
  }
}

function updProducto(req, res) {
    var idProducto = req.params.id;
    var params = req.body;
  
    var producto = new Producto();
    producto.titulo = params.Titulo;
    producto.descripcion = params.Descripcion;
    producto.precio = params.Precio;
    producto.categoria = mongoose.Types.ObjectId(params.Categoria);
    producto.vendido = params.Vendido;
    producto.feActualiza = new Date();
    producto.usuActualiza = mongoose.Types.ObjectId(params.UsuActualiza);
  
    if (producto.titulo != null && producto.descripcion != null) {
      Producto.findByIdAndUpdate(idProducto, producto, (err, productoUpdated) => {
        if (err) {
          res.status(500).send({
            message: "Error al actualizar el producto",
            detail: JSON.stringify(err),
          });
        } else {
          if (!productoUpdated) {
            res.status(404).send({
              message: "No se ha actualizado el producto",
              detail: "",
            });
          } else {
            res.status(204).send();
          }
        }
      });
    }
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
  insProducto,
  updProducto,
};
