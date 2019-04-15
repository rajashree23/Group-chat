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

var acceptdone=function(req,res){
  var docs = req.params.id;
  var topic = req.params.id1;
  console.log(docs);
  console.log(topic);
  adminModel.updateOne({'topic.topicname':  topic },
   {$pull:{"topic.$.request":docs
   }},
   function(err,raw){
       console.log(raw);
   });

  adminModel.updateOne({'topic.topicname':  topic },
   {$push:{"topic.$.memberemail":docs
   }},
   function(err,raw){
       console.log(raw);

   });


}


var denydone=function(req,res){
  var docs = req.params.id;
  var topic = req.params.id1;
  console.log(docs);
  console.log(topic);
  adminModel.updateOne({'topic.topicname':  topic },
   {$pull:{"topic.$.request":docs
   }},
   function(err,raw){
       console.log(raw);

   });



}
module.exports = {
    "accept": accept,
    "acceptdone":acceptdone,
    "denydone":denydone
};
