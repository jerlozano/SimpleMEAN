// var config      = require('config');
// var logger      = require('../common/logger.js');
// var Movie       = require('../models').Movie;
var Playbooks = require('../models/playbooks');

/* Export exposed functions */
module.exports = function() {

  module.getAll = function(callback) {
    Playbooks.find(function (err, playbooks) {
        if(err) {
          //do some error handling and return
          return;
        }
        callback(playbooks);
    });
  }

  module.getPlaybookById = function(id, callback) {
    Playbooks.findById(id, function (err, playbook) {
      if(err) {
        //do some error handling and return
        return;
      }
      callback(playbook);
    });
  }

  module.updatePlaybook = function(id, data, callback) {
    Playbooks.findById(id, function (err, playbook) {
      if(err) {
        //do some error handling and return
        return;
      }
      playbook.title = data.title;
      playbook.favorite = data.favorite;
      playbook.save();
      callback({
        success: true,
        message: 'successfully update'
      });
    });
  };

  return module;
};
