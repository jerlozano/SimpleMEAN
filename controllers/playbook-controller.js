var Playbooks = require('../models/playbooks');

/* Export exposed functions */
module.exports = function() {

  module.getAll = function(callback) {
    Playbooks.find(function (err, playbooks) {
        if(err) {
          callback({
            success: false,
            message: err
          })
          return;
        }
        callback({
          success: true,
          message: playbooks
        });
    });
  }

  module.getPlaybookById = function(id, callback) {
    Playbooks.findById(id, function (err, playbook) {
      if(err) {
        callback({
          success: false,
          message: err
        })
        return;
      }
      callback({
        success: true,
        message: playbook
      });
    });
  }

  module.updatePlaybook = function(id, data, callback) {
    Playbooks.findById(id, function (err, playbook) {
      if(err) {
        callback({
          success: false,
          message: err
        })
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
