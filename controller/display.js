var mongoose = require('mongoose');
var topicModel = require('../models/topic');


var display = function(req, res) {
    topicModel.find({}, function(err, docs) {
        if (!err) {
            var name = [];
            var num = [];
            for (var i = 0; i < docs.length; i++) {
                name.push((docs[i]).topicname);
                num.push(((docs[i]).messages).length);
            }
            console.log(name);
        } else {
            throw err;
        }
        if(req.session.msg){
            msg = req.session.msg;
        }
        else{
            msg = ""
        }
        req.session.msg = null;
        res.render('display', {
            "topics":name,
            "num":num,
            "msg":msg
        });

    });
};

module.exports = {
    "display": display,
};
