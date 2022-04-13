var express = require('express');
const knex = require('../knex');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin');
});

router.get('/intern_login',function(req,res,next){
  knex('internattendance').select('internattendance.*' ,'employee_list.id', 'employee_list.emp_id' ).rightJoin('employee_list', 'internattendance.id', 'employee_list.id').then(result => {
    console.log(result)
  res.render('intern_login',{ result: result })
  });
});

router.get('/login', function(req, res, next) {
  
  res.render('login');

});

//admin_update
router.post('/edit', function (req, res, next) {
  var id = req.body.id;
  var user = req.body.username;
  var pass = req.body.password;
  var fname = req.body.firstname;
  var lname = req.body.lastname;
  
  knex('admin').update({ id: id, username: user, password: pass, First_Name:fname, last_Name: lname}).where('id', id).then(result => {
    console.log(result);
    res.redirect('/admin');

  }).catch(error => { console.log(error) })
});



module.exports = router;
