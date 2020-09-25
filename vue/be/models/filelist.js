const mongoose = require('mongoose');

const filelistSchema = new mongoose.Schema({
    date: {type: String, default: '', index: true},
    folder: {type: String, default: ''},
    pro: {type: String, default: ''},
    msg: {type: String, default: ''}
});

const filelist = mongoose.model('filelist', filelistSchema);
module.exports = filelist;
