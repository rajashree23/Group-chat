var mongoose = require('mongoose');
var adminModel = require('../models/admin');

var accept=function(req,res){
  var findadmin = function (db, callback) {
  adminModel.find({}).toArray(function(err, allTheThings) {
    req.session.data=allTheThings;
    console.log(allTheThings);
  });
}

res.redirect('/notification');

}
module.exports = {
    "accept": accept,
};
