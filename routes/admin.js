var express = require('express');
const knex = require('../knex');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin');
});

module.exports = router;
