var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playbooksSchema = new Schema({
    title: {type: String, required: true},
    favorite: {type: Boolean, required: true},
    items: [],
    titlecolor: String
})

module.exports = mongoose.model('Playbooks', playbooksSchema);
