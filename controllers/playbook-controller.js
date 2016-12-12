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
        message: 'successfully updated'
      });
    });
  };

  module.createPlaybook = function(data, callback) {
    var pb = new Playbooks(data);
    pb.save(function (err) {
        if (err) {
            callback({
              success: false,
              error: err.errors
            });
        } else {
            callback({
              success: true,
              message: 'successfully created'
            });
        }
    })
  }

  return module;
};
