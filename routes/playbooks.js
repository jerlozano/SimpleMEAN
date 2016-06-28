var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Playbooks = require('../models/playbooks');

/* GET playbook listing. */
router.get('/', function (req, res, next) {
    Playbooks.find(function (err, playbooks) {
        res.send(playbooks);
    })
});


/* GET playbook listing by id */
router.get('/:pbId', function (req, res, next) {
    var idtoFind = req.params.pbId;

    Playbooks.findById(idtoFind, function (err, playbook) {
        res.send(playbook);
    })
});

/* Update playbook listing by id */
router.put('/:pbId', function (req, res, next) {
    //console.log("server put");
    var idtoFind = req.params.pbId;
    //console.log(idtoFind);

    Playbooks.findById(idtoFind, function (err, playbook) {
        playbook.title = req.body.title;
        playbook.favorite=req.body.favorite;
        playbook.save();
        res.send({'updated':1});
    })
});


/!* Post a new playbook *!/
router.post('/', function (req, res, next) {
    console.log(req.body);

    var pb = new Playbooks(req.body);
    pb.save(function (err) {
        if (err) {
            res.send(err.errors);
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
