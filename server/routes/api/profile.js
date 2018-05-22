const express = require('express');
const Router = express.Router();

// @route GET api/profile/test
// @desc Tests profile Router
// @access Public
Router.get('/test', (req, res) => {
  res.json({ msg: "Profile Works"});
});

module.exports = Router;