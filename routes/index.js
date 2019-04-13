var express = require('express');
var router = express.Router();
var register = require('../controller/register');
var login = require('../controller/login');
var create = require('../controller/create');
var topics = require('../controller/display');

var send = require('../controller/send');
var refresh = require('../controller/refresh');
/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('homepage');
});


router.get('/login', function(req, res) {
    if (req.session.user) {
        res.redirect('/profile');
    } else {
        res.render('login', {
            "msg": ""
        });
    }
});
router.get('/register', function(req, res) {
    if (req.session.user) {
        res.redirect('profile');
    } else {
        res.render('register');
    }
});
router.get('/homepage', function(req, res) {
    if (req.session.user) {
        res.redirect('profile');
    } else {
        res.render('page');
    }
});
router.get('/topic/:id', function(req, res) {
    req.session.topic = req.params.id;

    if (req.session.user) {
        res.render('chatbox');
    } else {
        res.redirect('../homepage');
    }
});

router.get('/profile', function(req, res) {
    if (req.session.user) {
        res.render('profile', {
            'user': req.session.user
        });
    }
    else {
        res.redirect('/homepage')
    }

});

router.get('/notif',function(req,res){
  res.render('admin');


});
router.post('/notif',function(req,res){
   if(req.session.user)
     res.redirect('/admin');
});

router.post('/login', login.login);
router.post('/register', register.register);
router.post('/create', create.topics);
router.get('/display', topics.display);
router.post('/send', send.message);
router.post('/refresh', refresh.messages);

router.get('/logout', function(req, res) {
    req.session.user = null;
    console.log(req.session);
    res.render('login', {
        "msg": "Logged out Successfully..!!"
    });
});
module.exports = router;
