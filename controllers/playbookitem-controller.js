var Playbookitems = require('../models/playbookitems');

/* Export exposed functions */
module.exports = function() {

  module.createPlaybookitem = function(data, callback) {
    var pb = new Playbookitems(data);
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
