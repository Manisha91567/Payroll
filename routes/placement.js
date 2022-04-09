var express = require('express');
const knex = require('../knex');
var router = express.Router();
var nodeMailer = require('nodemailer');

// add
router.get('/placement', function(req, res, next) {
  knex('placement').select('*').then(result =>{
    console.log(result);
    res.render('placement',{result : result});
  })
});

router.get('/placement-form', function(req, res, next) {
  knex('placement').select('*').then(result =>{
    console.log(result);
    res.render('placement-form',{result : result});
  })
});
router.post('/add', function(req, res,next){
    var FName = req.body.FName;
    var LName = req.body.LName;
    var Contact = req.body.Contact;
    var Address = req.body.Address;
    var DOB = req.body.DOB;
    var Email = req.body.Email;
    var Experience = req.body.Experience;
    var CompName = req.body.CompName;
    var CV = req.body.CV;
   
    knex('placement').insert({FirstName : FName, LastName : LName, Contact : Contact, Address : Address, DOB : DOB, Email : Email, Experience : Experience, CompName : CompName, CV : CV}).then(result =>{
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