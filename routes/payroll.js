var express = require('express');
const knex = require('../knex');
var router = express.Router();

router.get('/payroll', function(req, res, next){
    var result=[];
    res.render('payroll', { result: result });
});


module.exports = router;