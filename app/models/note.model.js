const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    phone: Number,
    username: String,
    name:String,
    title: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('contact', NoteSchema);
