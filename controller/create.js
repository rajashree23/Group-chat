var mongoose = require('mongoose');
var topicModel = require('../models/topic');
var adminModel = require('../models/admin');

var topics=function(req,res){
		var topicmodel = new topicModel({
			topicname:req.body.topic,
            messages:["Created by "+req.session.user.name]
		});
		adminModel.findOne({
			email:req.session.user.email},function(err,user){
				console.log(user);
				if(user){
					adminModel.updateOne({'email':req.session.user.email},
				   {$push:{"topicname.$.topic":req.body.topic}},
				   function(err,raw){
						   console.log(err);
					 });
				}
				else{
					var adminmodel= new adminModel({
						 email:req.session.user.email,
						 topic:[{
							 topicname:req.body.topic,
							 memberemail:[],
							 request:[]
						 }]
					});
					adminmodel.save(function(err,docs){
						 console.log("this",err);
					});
				}

		});
		topicmodel.save(function(err,doc){
			if(!err){
				req.session.msg = "Topic created Successfully..!!"
				res.redirect('display');
			}
			else {
				req.session.msg = "Topic already exists, Feel free to join..!!"
				res.redirect('display');
			}
		});
};

module.exports = {"topics":topics};
