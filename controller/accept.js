var mongoose = require('mongoose');
var adminModel = require('../models/admin');

var accept=function(req,res){
  adminModel.findOne({'email': req.session.user.email},function(err,doc){
    console.log(err);
  });

}
module.exports = {
    "accept": accept,
};
