var mongoose = require('mongoose');
var adminModel = require('../models/admin');

var admin = function(req,res){
  req.session.topic = req.params.id;
  
  adminModel.findOne({topic: { $elemMatch: { topicname: { req.session.topic} , memberemail: {req.session.email} } },function(err,users){
    if(users){

       return res.redirect('topic/'+req.session.topic);

    }
    else {
      adminModel.updateOne({"topic.topicname":   req.session.topic },
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
});
}
module.exports = {
    "admin": admin,
};
