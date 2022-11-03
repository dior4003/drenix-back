const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    phone: Number,
    username: String,
    name:String,
    decr: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('contact', NoteSchema);
