var mongoose = require('mongoose');
var adminModel = require('../models/admin');

var adminj = function(req,res){
  req.session.topic = req.params.id;
  var ctopic=req.session.topic;
  var member=req.session.email;
  adminModel.findOne({ "topic.topicname":ctopic},{"topic.$":1} ,function(err,users){
    console.log("hii",users.memberemail);

    if(users){

       return res.redirect('/topic/'+req.session.topic);

    }
    else {
      adminModel.updateOne({'topic.topicname':  ctopic },
       {$push:{topic:[{
         topicname:{},
         memberemail:[],
         request:[req.session.user.email]
       }]}},
       function(err,raw){
           console.log(raw);
       });

          return res.redirect('/profile');
    }


});
}
var adminl=function(req,res){
  req.session.topic = req.params.id;
  var ctopic=req.session.topic;
  var member=req.session.email;
  adminModel.updateOne({'topic.topicname':  ctopic },
   {$pull:{topic:[{
     topicname:{},
     memberemail:[req.session.user.email],
     request:[]
   }]}},
   function(err,raw){
       console.log(raw);
   });
     return res.redirect('/profile');
}

module.exports = {
    "adminj": adminj,
    "adminl":adminl,

};
