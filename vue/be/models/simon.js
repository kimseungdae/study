const mongoose = require('mongoose');
const simonSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    count: {type: Number, default: ''},
})

const simon = mongoose.model('simon', simonSchema);
module.exports = simon;
