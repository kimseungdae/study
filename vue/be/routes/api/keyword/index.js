var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const Keyword = require('../../../models/keyword');

router.get('/', function(req, res, next){
    Keyword.find()
        .then(r => {
            res.send({success: true, keyword: r})
        })
        .catch(e => {
            res.send({success: false})
        });
});

router.post('/', (req, res, next) => {
    const {en, kr} = req.body
    const u = new Keyword({en, kr})
    u.save()
        .then(r => {
            res.send({success: true, msg: r})
        })
        .catch(e => {
            res.send({success: false, msg: e.message})
        });
});


router.all('*', function(req, res, next) {
    next(createError(404, '그런 api 없어'));
});

module.exports = router;
