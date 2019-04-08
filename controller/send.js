var mongoose = require('mongoose');
var topicModel = require('../models/topic');

var message = function(req, res) {
    conditions = {topicname:req.session.topic},
	options = {multi: true};
	topicModel.findOneAndUpdate(conditions,{$push : {messages:req.session.user.name+':'+req.body.message}},options,callback);
	function callback (err) {
		  		if(err){
		  			console.log(err);
		  		}
		  		else{
                    res.redirect('topic/'+req.session.topic);
		  		}
			};
};

module.exports = {
    "message": message,
};
