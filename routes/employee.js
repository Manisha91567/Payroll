var express = require('express');
const knex = require('../knex');
var router = express.Router();



//retrieve
router.get('/employee', function (req, res, next) {

  knex('employee_list').select('*').then(result => {
    console.log(result)
    res.render('employee', { result: result })

  });
});


//insert

router.post('/add', function (req, res, next) {


  knex('employee_list').select('id').orderBy('id', 'desc').limit(1).then(dbId => {
    var dob = req.body.birthdate;
    var emp_id = "TS" + req.body.firstname.toUpperCase() + dbId[0].id;
    var fname = req.body.firstname;
    var lname = req.body.lastname;
    var add = req.body.address;
    var contact = req.body.contact;
    var gender = req.body.gender;
    var job_type = req.body.job_type;
    var position = req.body.position;
    var joining_date = req.body.joining_date;
    var salary = req.body.salary;

    knex('employee_list').insert({ emp_id: emp_id, FirstName: fname, LastName: lname, Address: add, Birthdate: dob, Contact: contact, Gender: gender, JobType: job_type, Position: position, Joining_Date: joining_date, Salary: salary }).then(result => {
      console.log(result);
      res.redirect('/employee/employee');

    }).catch(error => { console.log(error) })
  }).catch(error => { console.log(error); })

});

//update
router.post('/edit', function (req, res, next) {
  var id = req.body.id;
  var fname = req.body.firstname;
  var lname = req.body.lastname;
  var add = req.body.address;
  var dob = req.body.birthdate;
  var contact = req.body.contact;
  var gender = req.body.gender;
  var job_type = req.body.job_type;
  var position = req.body.position;
  var joining_date = req.body.joining_date;
  var salary = req.body.salary;
  
  knex('employee_list').update({ id: id, FirstName: fname, LastName: lname, Address: add, Birthdate: dob, Contact: contact, Gender: gender, JobType: job_type, Position: position, Joining_Date: joining_date, Salary: salary }).where('id', id).then(result => {
    console.log(result);
    res.redirect('/employee/employee');

  }).catch(error => { console.log(error) })
});


//Delete
router.get('/delete/:id', function (req, res, next) {
  knex('employee_list').where('id', req.params.id).del().then(result => {
    console.log(result);
    res.redirect('/employee/employee');

  }).catch(error => { console.log(error) })
});


module.exports = router;
