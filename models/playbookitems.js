var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playbookitemsSchema = new Schema({
    itemname: {type: String, required: true},
})

module.exports = mongoose.model('Playbookitems', playbookitemsSchema);
