var express = require('express');
const knex = require('../knex');
var router = express.Router();



//retrieve
router.get('/attendance', function (req, res, next) {
  
  knex('attendance').select('attendance.*' ,'employee_list.id', 'employee_list.emp_id','employee_list.FirstName','employee_list.LastName' ).rightJoin('employee_list', 'attendance.id', 'employee_list.id').then(result => {
    console.log(result)
    res.render('attendance', { result: result })

  });
});


//Delete
router.get('/delete/:id', function (req, res, next) {
  knex('attendance').where('id', req.params.id).del().then(result => {
    console.log(result);
    res.redirect('/attendance/attendance');

  }).catch(error => { console.log(error) })
});
module.exports = router;