var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const simon = require('../../../models/simon');

router.get('/', function(req, res, next){
    simon.find()
        .then(r => {
            res.send({success: true, simon: r})
        })
        .catch(e => {
            res.send({success: false})
        });
});

router.post('/', (req, res, next) => {
    const {name, count} = req.body
    const u = new simon({name, count})
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
