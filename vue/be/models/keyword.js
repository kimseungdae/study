const mongoose = require('mongoose');
const keywordSchema = new mongoose.Schema({
    en: {type: String, default: '', unique: true, index: true},
    kr: {type: String, default: ''},
})

const keyword = mongoose.model('keyword', keywordSchema);
module.exports = keyword;
