'use strict';

var response = require('./res');
var connection = require('./conn');

//read
exports.users = function(req, res) {
    connection.query('SELECT * FROM product', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findUsers = function(req, res) {
    
    var id = req.params.id;

    connection.query('SELECT * FROM product where id = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    
    var name = req.body.name;
    var price = req.body.price;

    connection.query('INSERT INTO product (name, price) values (?,?)',
    [ name, price ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;

    connection.query('UPDATE product SET name = ?, price = ? WHERE id = ?',
    [ name, price, id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah user!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    
    var id = req.body.id;

    connection.query('DELETE FROM product WHERE id = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus user!", res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};