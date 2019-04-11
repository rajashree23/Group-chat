var mongoose = require('mongoose');
var topicModel = require('../models/topic');
var adminModel = require('../models/admin');

var topics=function(req,res){
		var topicmodel = new topicModel({
			topicname:req.body.topic,
            messages:["Created by "+req.session.user.name]
		});
		var adminmodel = new adminModel({
			email:req.session.user.email,

		});
    	console.log(req.session.user.email);
		console.log(req.session.user.name);
		adminmodel.save(function(err,doc){
			
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
