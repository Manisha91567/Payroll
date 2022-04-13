var express = require('express');
const knex = require('../knex');
var router = express.Router();
var nodeMailer = require('nodemailer');

// add
router.get('/placement', function(req, res, next) {
  knex('placement').select('*').then(result =>{
    
    res.render('placement',{result : result});
  })
});

router.get('/placement-form', function(req, res, next) {
  knex('placement').select('*').then(result =>{
  
    res.render('placement-form');
  })
});
router.post('/add', function(req, res,next){
  var FName = req.body.FName;
  var LName = req.body.LName;
  var phoneno = req.body.phoneno;
  var Address = req.body.Address;
  var DOB = req.body.DOB;
  var Email = req.body.Email;
  var Experience = req.body.Experience;
  var CompName = req.body.CompName;
  var CV = req.body.CV;
  var gender = req.body.gender;
  knex('placement').insert({FirstName:FName, LastName:LName, contact:phoneno, Address:Address, DOB:DOB, Email:Email, Experience:Experience, CompName:CompName, CV:CV, gender:gender}).then(result =>{
    console.log(result);
    res.redirect('/placement/placement');
  })
});

  router.post('/edit', function(req, res,next){
    var id = req.body.id;
    var sdate = req.body.sdate;
    var stime = req.body.stime;
  
    knex('placement').update({id : id,select_date : sdate , select_time : stime}).where('id',id).then(result =>{
      console.log(result);
      res.redirect('/placement/placement');
    })
  });

 

  module.exports = router;