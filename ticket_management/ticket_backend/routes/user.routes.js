var express = require('express');
var router = express.Router();

var userController = require('../controllers/user.controller');

router.post('/authenticate', userController.checkCredentials);

router.get('/getAllUser',userController.getAllUsers);


module.exports = router;