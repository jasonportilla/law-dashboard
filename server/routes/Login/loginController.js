const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const login = require('./login');

//Testing MySQL Connection
router.get('/', (req, res) => {
  login.getLogin(function(err, loginValues){
    if(err){
        console.log(err);
        return res.status(403).send("User unauthorized");
    }else{
        res.status(200).send(loginValues);
    }
});
});

// @route   POST /login
// @desc    login user to application
// @access  Private
router.post('/', (req, res) => {
  
});

module.exports = router;
