'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var usuario_routes = require('./routes/usuario');
var perfil_routes = require('./routes/perfil');
var categoria_routes = require('./routes/categoria');
var producto_routes = require('./routes/producto');
var factura_routes = require('./routes/factura');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});

app.use('/api/v1/usuario', usuario_routes);
app.use('/api/v1/perfil', perfil_routes);
app.use('/api/v1/categoria', categoria_routes);
app.use('/api/v1/producto', producto_routes);
app.use('/api/v1/factura', factura_routes);

module.exports = app;