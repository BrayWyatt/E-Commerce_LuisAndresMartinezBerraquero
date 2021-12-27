'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta';

exports.createToken = function (usuario) {
    console.log('JSCJ USUARIO');
    var payload = {
        id: usuario._id,
        nombres: usuario.nombres,
        movil: usuario.movil,
        email: usuario.email,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix()
    };
    return jwt.encode(payload, secret);
};