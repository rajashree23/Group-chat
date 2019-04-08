var mongoose = require('mongoose');
var topicModel = require('../models/topic');


var messages = function(req, res) {
    topicModel.find({topicname:req.session.topic}, function(err, docs) {
        if (!err) {
            var mess = []
            docs = docs[0]['messages']
            for (var i = 0; i < (docs).length; i++) {
                mess.push((docs)[i]+'');
            }
        } else {
            throw err;
        }
        res.json(mess)
    });
};

module.exports = {
    "messages": messages,
};
