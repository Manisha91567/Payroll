var express = require('express');
const knex = require('../knex');
var router = express.Router();

//retrieve
router.get('/payroll', function (req, res, next) {
 
    knex('payroll').select('payroll.*', 'employee_list.id','employee_list.emp_id','employee_list.FirstName','employee_list.LastName','employee_list.Gross_Salary').rightJoin('employee_list', 'payroll.id', 'employee_list.id').then(result => {
      console.log(result)
      res.render('payroll', { result: result })
  
    });
  });    

 //Delete
router.get('/delete/:id', function (req, res, next) {
  knex('payroll').where('id', req.params.id).del().then(result => {
    console.log(result);
    res.redirect('/payroll/payroll');

  }).catch(error => { console.log(error) })
});



module.exports = router;