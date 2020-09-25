var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.use('/keyword', require('./keyword'))
router.use('/file', require('./file'))
router.use('/filelist', require('./filelist'))
router.use('/simon', require('./simon'))
router.use('/chat', require('./chat'))

router.all('*', function(req, res, next){
    next(createError(404, 'api 없음'));
});

module.exports = router;
