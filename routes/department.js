var express = require('express');
const knex = require('../knex');
var router = express.Router();

//router.get('/', function(req, res, next) {
  //  res.render('department', { title: 'Express' });
  //});
  
//retreive
router.get('/department', function (req, res, next) {

    knex('department').select('*').then(result => {
      console.log(result)
      res.render('department', { result: result })
  
    });
});

router.post('/add', function (req, res, next) {
  knex('department').select('id').orderBy('id', 'desc').limit(1).then(dbId => {
 
    var dept_id = "Dept" + dbId[0].id;
    var dept_name = req.body.Dept_name;
    var dept_head = req.body.Dept_head;

        knex('department').insert({Dept_id	: dept_id,Dept_name:dept_name,Dept_head: dept_head}).then(result => {
        console.log(result);
        res.redirect('/department/department');
  
      }).catch(error => { console.log(error) })
    }).catch(error => { console.log(error); })
  
  });
  
  //update
  router.post('/edit', function (req, res, next) {
    var id = req.body.id
    var dept_name = req.body.Dept_name;
    var dept_head = req.body.Dept_head;

        knex('department').update({id:id,Dept_id	: dept_id,Dept_name:dept_name,Dept_head: dept_head}).where('id',id).then(result => {
      console.log(result);
      res.redirect('/department/department');
  
    }).catch(error => { console.log(error) })
  });
  
  
  //Delete
  router.get('/delete/:id', function (req, res, next) {
    knex('department').where('id', req.params.id).del().then(result => {
      console.log(result);
      res.redirect('/department/department');
  
    }).catch(error => { console.log(error) })
  });
  
  






module.exports = router;