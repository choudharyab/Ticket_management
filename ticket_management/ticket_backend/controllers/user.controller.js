var User = require('../models/user');
var _ = require('underscore');
var jwt = require('jsonwebtoken');
var keys = require('../init/keys');

/***************Login Function********************************/
module.exports.checkCredentials = function(req, res){
    User.forge({ email: req.body.email, password: req.body.password})
        .fetch()
        .then(function(user){
            if(user){
                var userToken = jwt.sign(_.extend(_.omit(user.attributes, 'password')), keys.jwt.adminSecretKey);         
                res.json({
                    type: true,
                    token: userToken,
                    data:user
                });
            }else{
                res.json({
                    type:false,
                    error: 'Incorrect email or password'
                });
            }
        })
        .catch(function(err){
            console.log(err.stack);
            res.status(400).json({error: err.message});
    });
};

/***************GET ALL USERS******************************/
module.exports.getAllUsers = function(req, res){
    User.forge()
        .orderBy('id', 'ASC')
        .fetchAll()
        .then(function(users){
            res.json({
                type: true,
                data: users
            });
        }).catch(function(err){
            console.log(err.stack);
            res.status(400).json({error: err.message});
        });
};