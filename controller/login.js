var mongoose = require('mongoose');
var userModel = require('../models/user');
var adminModel = require('../models/admin');

var login = function(req, res) {
    userModel.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) throw err;
        if (user) {
            //bcrypt.compare(req.body.password,user.password,function(err,isMatch) {
            if (err) throw err;
            if (user.password == req.body.password) {
                var details = {
                    "name": user.name,
                    "email": user.email,
                    "phone": user.phone,
                    "gender": user.gender,
                };
                req.session.user = details;

                adminModel.findOne({email:req.body.email},function(err,users){
                  if(users){
                    req.session.search="yes";
                  }
                  else {
                    req.session.search="yes";
                  }

                });
                
                return res.redirect('/profile');
            } else
                return res.render('login',{"msg":"Wrong email or password, Please try again..!!"});
        }
    });
};
//
// var issue = function(req, res) {
//     issueModel.find({}, function(err, docs) {
//         if (!err) {
//             console.log(docs);
//         } else {
//             throw err;
//         }
//         res.render('admin', {
//             users: docs
//         });
//     });
// };

module.exports = {
    "login": login,
};
