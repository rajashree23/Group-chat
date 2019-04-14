var mongoose = require('mongoose');
var adminModel = require('../models/admin');

var adminj = function(req,res){
  req.session.topic = req.params.id;
  var ctopic=req.session.topic;
  var member=req.session.user.email;
  adminModel.findOne({ "topic.topicname":ctopic},{"topic.$":1} ,function(err,users){
    console.log("hii",users);

    if(users.topic[0].memberemail.indexOf(member)>-1){

       return res.redirect('/topic/'+req.session.topic);

    }
    else {
      users.topic[0].request.push(member);
      console.log(users.topic[0].request);
      adminModel.replaceOne({'topic.topicname':  ctopic },
       {topic:[{
         topicname:{ctopic},
         memberemail:[users.topic[0].memberemail],
         request:[users.topic[0].request]
       }]},
       function(err,raw){
           console.log(raw);
       });

          return res.redirect('/profile');
    }


});
}
var adminl=function(req,res){
  req.session.topic = req.params.id;
  console.log(req.session.topic);
  var ctopic=req.session.topic;
  var member=req.session.user.email;
  adminModel.findOne({ "topic.topicname":ctopic},{"topic.$":1} ,function(err,users){



  users.topic[0].memberemail.pop(member);
  console.log(users);
  adminModel.replaceOne({'topic.topicname':  ctopic },
   {topic:[{
     topicname:{ctopic},
     memberemail:[users.topic[0].memberemail],
     request:[users.topic[0].request]
   }]},
   function(err,raw){
       console.log(raw);
   });

   });
   return res.redirect('/profile');
}

module.exports = {
    "adminj": adminj,
    "adminl":adminl,

};
