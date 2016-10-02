var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Playbookitems = require('../models/playbookitems');

/* Post a new playbook */
router.post('/', function (req, res, next) {
    console.log(req.body);

    var pbi = new Playbookitem(req.body);
    pb.save(function (err) {
        if (err) {
            res.send(err.errors);
        } else {
            res.json({message: 'playbook created!'});
        }
    })
});

module.exports = router;
