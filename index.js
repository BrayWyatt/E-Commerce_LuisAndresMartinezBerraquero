'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;

var DB = '';

DB = 'ecommerce';

mongoose.connect('mongodb+srv://admin:3c0mm3r@cluster0.qdrhw.mongodb.net/'+ DB +'?retryWrites=true&w=majority', (err, res) => {    
    if (err) {
        console.log('01 Error');
        throw err;
    } else {
        console.log('02 Connection successful...');
        app.listen(port, function () {
            console.log("03 API Port:" + port);
        })
    }
})