var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const filelist = require('../../../models/filelist');

router.get('/', function(req, res, next){
    const {folder:key} = req.query ;
    let y = {folder:key};
    if(y.folder == undefined){
        filelist.find().sort({data:1})
            .then(r => {
                res.send({success: true, todo: r})
            })
            .catch(e => {
                res.send({success: false})
            });
    }else{
        filelist.find(y).sort({data:1})
            .then(r => {
                res.send({success: true, todo: r})
            })
            .catch(e => {
                res.send({success: false})
            });
        }
    });

router.post('/', (req, res, next) => {
    const {date, folder, pro, msg} = req.body
    const u = new filelist({date, folder, pro, msg})
    u.save()
        .then(r => {
            res.send({success: true, msg: r})
        })
        .catch(e => {
            res.send({success: false, msg: e.message})
        });
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const {date, folder, pro, msg} = req.body;
    filelist.updateOne({_id: id}, { $set: {date, folder, pro, msg}})
        .then(r => {
            res.send({success: true, msg: r})
        })
        .catch(e => {
            res.send({success: false, msg: e.message})
        });
})

router.all('*', function(req, res, next) {
    next(createError(404, '그런 api 없어'));
});

module.exports = router;
