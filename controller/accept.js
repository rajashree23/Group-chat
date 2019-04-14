var mongoose = require('mongoose');
var adminModel = require('../models/admin');

var accept=function(req,res){

  adminModel.findOne({'email': req.session.user.email},function(err,doc){
    console.log("hi");
    if(doc)
    {
      res.render("notification",{
           'requests':doc
      })
        
    }
  });

}
module.exports = {
    "accept": accept,
};
