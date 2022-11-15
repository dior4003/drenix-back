const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    

header:Object,
section1:Object,
section2:Array,
section3:Object,
section4:Object,
sectoin5:Object,
seaction6:Object,
sectoin7:Object,
section8:Object,
section10:Object,
footer:Object
}, {
    timestamps: true
});

module.exports = mongoose.model('uz', NoteSchema);
