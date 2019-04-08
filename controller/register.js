var mongoose = require('mongoose');
var userModel = require('../models/user');

var register = function(req, res) {
    var usermodel = new userModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        gender: req.body.gender,
    });
    console.log("This gender:" + req.body.gender);
    usermodel.save(function(err, doc) {
        if (err) res.render('login', {
            msg: "Credentials already exists..!!"
        })
        res.render('login', {
            msg: "Registered Successfully..!!"
        })
    });
};

module.exports = {
    "register": register
};
