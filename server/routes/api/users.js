const express = require('express');
const Router = express.Router();

// @route GET api/users/test
// @desc Tests users Router
// @access Public
Router.get('/test', (req, res) => {
  res.json({ msg: "Users Works"});
});

module.exports = Router;