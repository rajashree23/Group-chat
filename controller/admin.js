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


      adminModel.updateOne({'topic.topicname':  ctopic },
       {$push:{"topic.$.request":[member]
       }},
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
  console.log(member);
  adminModel.findOne({ "topic.topicname":ctopic},{"topic.$":1} ,function(err,users){

  console.log(users);
  if(users)
  {console.log(member);
  adminModel.updateOne({'topic.topicname':  ctopic },
   {$pull:{"topic.$.memberemail":member
   }},
   function(err,raw){
       console.log(raw);
   });

      return res.redirect('/profile');
   }


});
}
module.exports = {
    "adminj": adminj,
    "adminl":adminl,

};
