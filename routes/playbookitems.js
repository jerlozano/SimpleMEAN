var express = require('express');
var router = express.Router();
var plabyookitemController = require('../controllers/playbookitem-controller')();

/* Post a new playbook item */
router.post('/', function (req, res, next) {
  plabyookitemController.createPlaybookitem(req.body, function(payload) {
    res.json(payload);
  });
});

module.exports = router;
