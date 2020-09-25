var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var $this = this;

var sorceCync = {
    folder : null,
    fPath  : null,  // 하위 폴더 경로 반환
    files  : null,
    full   : null,
    fullTml: null,
    jsonP  :[],
    titP : [],
    init: function(){
        $this.fs    = require("fs");
        $this.path = "/00.Project/01.WorkSpace/M_PROJ_LOUNGE3.0/src/main/webapp/publish/view";
        this.read();
    },
    read: function(){
        $this.fs.readdir($this.path, function( err, folders ){
            for( var i = 0; i < folders.length; i++ ) {
                this.folder = folders[i];
                this.fPath = $this.path + "/" + this.folder;
                this.files = $this.fs.readdirSync(this.fPath);  // 하위 폴더 내 파일 검색
                for(var idx in this.files){
                    var suffix = this.files[idx].substr(this.files[idx].length - 4, this.files[idx].length);
                    var fileName = this.files[idx];
                    if(suffix === 'html'){
                        this.full = this.fPath+'/'+this.files[idx];
                        var fileN = this.full;
                        var resT = null;

                        var rFullTml = $this.fs.readFileSync(this.full);
                        this.fullTml = rFullTml.toString();
                        if(this.fullTml.indexOf('<h1>') == -1){
                            resT = this.files[idx];
                        }else{
                            resT = this.fullTml.substring(this.fullTml.indexOf('<h1>')+4,this.fullTml.indexOf('</h1>'));
                            resT = resT.trim();
                            resT = resT.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"")
                            if(resT == ''){
                                resT = this.files[idx];
                            }
                        }
                        sorceCync.jsonP.push({'folder':this.folder,'file':this.files[idx],'tit':resT.trim()});
                    }
                }
            }
        });

    }
}

sorceCync.init();

router.get('/', function(req, res, next){
    res.send({success: true, list: sorceCync.jsonP})
});


router.all('*', function(req, res, next) {
    next(createError(404, '그런 api 없어'));
});

module.exports = router;

