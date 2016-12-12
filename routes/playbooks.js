var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Playbooks = require('../models/playbooks');
var playbookController = require('../controllers/playbook-controller')();

/* GET playbook listing. */
router.get('/', function (req, res, next) {
  playbookController.getAll(function(payload) {
    res.json(payload);
  });
});


/* GET playbook listing by id */
router.get('/:pbId', function (req, res, next) {
    var id = req.params.pbId;
    playbookController.getPlaybookById(id, function(payload) {
      res.json(payload);
    });
});

/* Update playbook listing by id */
router.put('/:pbId', function (req, res, next) {
    var id = req.params.pbId;;
    playbookController.updatePlaybook(id, req.body, function(payload) {
      res.json(payload);
    });
});


/* Post a new playbook */
router.post('/', function (req, res, next) {
    var pb = new Playbooks(req.body);
    pb.save(function (err) {
        if (err) {
            res.json({
              success: false,
              error: err.errors
            });
        } else {
            res.json({message: 'playbook created!'});
        }
    })
});

/*
 router.delete('/:oppId', function(req, res, next){
 var idtoDelete=req.params.oppId;

 Users.findByIdAndRemove(idtoDelete,function(){
 res.json({message: idtoDelete + " deleted"});
 });
 })*/

module.exports = router;
