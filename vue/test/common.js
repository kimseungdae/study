// 로그인후 return Url (2017.02.28, moretry)
var strReUrl = location.href;//encodeURIComponent(location.href);

var deparam = function(query) {
    var pairs, i, keyValuePair, key, value, map = {};
    // remove leading question mark if its there
    if (query.slice(0, 1) === '?') {
        query = query.slice(1);
    }
    if (query !== '') {
        pairs = query.split('&');
        for (i = 0; i < pairs.length; i += 1) {
            keyValuePair = pairs[i].split('=');
            key = decodeURIComponent(keyValuePair[0]);
            value = (keyValuePair.length > 1) ? decodeURIComponent(keyValuePair[1]) : undefined;
            map[key] = value;
        }
    }
    return map;
}

var callback = function() {
    //console.log('callback');
};

var commonAjax = function(jsonObj) {
    /* Sample
     commonAjax({
     url: '/member/confirm/chkHpHashJson',
     paramData: deparam($("#f_mem_info").serialize()),
     successFunction: function(result) {
     fnChkNumberResult(result.rtn, result.hashInfo);
     }
     });
     */
    var emptyFunction = function() {};
    var jsonParam = {
        url: jsonObj.url !=null ? jsonObj.url : '',
        paramData: jsonObj.paramData != null ? jsonObj.paramData : '',
        asyncType: jsonObj.asyncType != null ? jsonObj.asyncType : false,
        successFunction: jsonObj.successFunction != null ? jsonObj.successFunction : emptyFunction,
        errorFunction: jsonObj.errorFunction != null ? jsonObj.errorFunction : emptyFunction,
        completeFunction: jsonObj.completeFunction != null ? jsonObj.completeFunction : emptyFunction,
        dataType: jsonObj.dataType != null ? jsonObj.dataType : 'JSON'
    }

    $.ajax({
        url: jsonParam.url,
        type: "POST",
        dataType: "JSON",
        data: jsonParam.paramData,
        async: jsonParam.asyncType,
        success: function(data) {
            jsonParam.successFunction(data);
        },
        error: function(error) {
            jsonParam.errorFunction(error);
        },
        complete: function() {
            jsonParam.completeFunction();
        }
    });
}

var redirectPage = function(formObj) {
    /* Sample
     redirectPage({
     url: url,
     paramData: deparam($("#f_mem_info").serialize()),
     appendPosition: 'formDiv'
     });
     */
    var formParam = {
        url: formObj.url != null ? formObj.url : '',
        targetId: formObj.targetId != null ? formObj.targetId : '',
        appendPosition: formObj.appendPosition != null ? formObj.appendPosition : 'body',
        paramData: formObj.paramData != null ? formObj.paramData : ''
    }

    var $form = $('<form></form>');
    $form.attr('action', formParam.url);
    $form.attr('method', 'post');
    $form.attr('target', formParam.targetId);
    $form.appendTo(formParam.appendPosition);

    if (formParam.paramData != '') {
        for (var p in formParam.paramData) {
            var idx = $('<input type="hidden" value="' + formParam.paramData[p] + '" name="' + encodeURIComponent(p) + '">');
            $form.append(idx);
        }
    }

    $form.submit();
}

// 랜딩 타입별 메뉴 이동
var goMenuByLanding = function(landingType, landingPath) {
    //alert(vmd + ":" + sAgentType + ":" + svnVer);
    var chkVer = Number("040200");

    if (landingType == "00") {}
    else if (vmd == "A") executeApp(landingType, landingPath, true, vmd);
    else if (landingType == "04") location.href = '/newest';
    else if (landingType == "05") location.href = '/detail/albumInfo?axnm=' + landingPath;
    else if (landingType == "06") location.href = '/detail/songInfo?xgnm=' + landingPath;
    else if (landingType == "07") location.href = '/detail/artistInfo?xxnm=' + landingPath;
    else if (landingType == "16") location.href = '/product/productMain';
    else if (landingType == "162") location.href = '/detail/recommendInfo?plmSeq=' + landingPath;
    else if (landingType == "24") location.href = '/detail/recommendInfo?plmSeq=' + landingPath;
    else if (landingType == "26") {
        var landingPaths = "";
        if (landingPath.indexOf("^") > -1) {
            landingPaths = landingPath.split("^");

            if (vmd == "A") {
                location.href = '/app/magazine/magazineView?ctid=' + landingPaths[0] + '&mgz_seq=' + landingPaths[2];
            } else {
                location.href = '/magazine/magazineView?ctid=' + landingPaths[0] + '&mgz_seq=' + landingPaths[2];
            }
        } else {
            location.reload();
        }
    }
    else if (landingType == "36") location.href = '/chart';
    else if (landingType == "39") fnGoMenu("39", landingPath);
    else if (landingType == "59") fnGoMenu("59", landingPath);
    else if (landingType == "98") window.open(landingPath, '_blank');
    else if (landingType == "84") location.href = '/app/magazine/magazineList?ctid=' + landingPath;
    else if (landingType == "177") {
        var landingPaths = "";
        if (landingPath.indexOf("^") > -1) {
            landingPaths = landingPath.split("^");

            location.href = landingPaths[1];
        } else {
            location.reload();
        }
    }
    else executeApp(landingType, landingPath, true, vmd);

    return false;
}

// 랜딩 타입별 매거진 메뉴 이동
var goMenuByMgzLanding = function(landingType, landingPath) {
    var landingPaths = "";
    var viewChk = "Y";
    var chkVer = Number("040100");
    var nLandingType = "26,177,179";
    var sUrl = document.location.href;

    //iPhone 웹뷰여부 체크
    if (sAgentType == "DI" && sUrl.indexOf("magazineList") > -1 && landingType != "26" && nLandingType.indexOf(landingType) > -1) {
        viewChk = "N";
    }

    //Android 웹뷰여부 체크
    /*if (sAgentType == "IV") {
        viewChk = "N";
    }*/

    //alert(viewChk + ":" + landingType);
    if (nLandingType.indexOf(landingType) < 0) goMenuByLanding(landingType, landingPath);
    else if (viewChk == "Y" && vmd == "A" && (sAgentType == "DI" || (sAgentType == "IV" && svnVer < chkVer))) {
        //alert(viewChk + ":" + vmd + ":" + sAgentType + ":" + svnVer);
        executeApp(landingType, landingPath, true, vmd);
    } else {
        //alert(landingType);
        if (landingType == "26") {
            var landingUrl = "";

            if (landingPath.indexOf("^") > -1) {
                landingPaths = landingPath.split("^");
            }

            if (vmd == "A") {
                landingUrl = '/app/magazine/magazineView?ctid=' + landingPaths[0] + '&mgz_seq=' + landingPaths[2];
            } else {
                landingUrl = '/magazine/magazineView?ctid=' + landingPaths[0] + '&mgz_seq=' + landingPaths[2];
            }

            landingPath = "^" + genieDomain + landingUrl;
        }

        if (landingPath.indexOf("^") > -1) {
            landingPaths = landingPath.split("^");
        }

        location.href = landingPaths[1];
    }
}

//좋아요
function like(likeType, songids, unm, fnSuccess) {
    var retCode = -1;
    var selectArrID = "";
    var likeCnt	= 0;
    var retBadgeMsg = '';

    if (iMemUno == "") {
        location.href = '/login/login?rtnURL='+ strReUrl;
        return false;
    }

    if (songids == "") {
        selectArrID = fnSelectArrSongID();
    } else {
        selectArrID = songids;
    }

    $.ajax({
        type: "POST",
        url: "/Includes/Commons/Module/jMusicLikeProc",
        dataType: "json",
        data: { "unm": iMemUno, "mltp": likeType, "mlsq": selectArrID },
        success: function (responseData) {
            retCode = responseData.Result.RetCode;
            if (retCode == "0") {
                likeCnt = responseData.DATA0.LikeCount;
                retBadgeMsg = responseData.DATA0.BADGE_MSG;

                //뱃지 발급 안내
                if (retBadgeMsg != ""){
                    FG_badgeTost(retBadgeMsg);
                } else {
                    alert('좋아요 되었습니다.');
                }

                if (fnSuccess) {
                    fnSuccess(retCode+"|"+likeCnt);
                }
            } else {
                likeCnt = 0;
                if (retCode == "E00021") {
                    retCode = "2";
                } else {
                    retCode = "1";
                }

                if (fnSuccess) {
                    fnSuccess(retCode+"|"+likeCnt);
                }
            }
        }
    });
}

//좋아요취소
function unlike(likeType, songids, unm, fnSuccess) {
    var retCode = -1;
    var selectArrID = "";
    var likeCnt = 0;

    if (iMemUno == "") {
        location.href = '/login/login?rtnURL=' + strReUrl;
        return false;
    }

    if (songids == "") {
        alert("먼저 선택해 주세요.");
        return false;
    } else {
        fnShowConfirm('좋아요취소 하시겠습니까?', null, function () {
            FG_layerPopup.hide($('#layerConfirm'));
            FG_toastPopup.hide($('#layerToastConfirm'));

            if (songids == "") {
                selectArrID = fnSelectArrSongID();
            } else {
                selectArrID = songids;
            }

            $.ajax({
                type: "POST",
                url: "/Includes/Commons/Module/jMusicLikeCancel",
                dataType: "json",
                data: {"unm": iMemUno, "mltp": likeType, "mlsq": selectArrID},
                success: function (responseData) {
                    retCode = responseData.Result.RetCode;
                    if (retCode == "0") {
                        likeCnt = responseData.DATA0.likeResult;
                        alert('좋아요취소 되었습니다');

                        if (fnSuccess) {
                            fnSuccess(retCode + "|" + likeCnt);
                        }
                    } else {
                        retCode = "2";
                        if (fnSuccess) {
                            fnSuccess(retCode + "|" + likeCnt);
                        }
                    }
                }
            });
        });
        return;
    }


}

//선택된 곡 리스트 ( 나중에 확인 .2017.2.28)
function fnSelectArrSongID() {
    var strArrSongID = "";

    $(".list-wrap").find(".select-list").each(function (i) {
        var currentSongId = $(".list-wrap").find(".select-list").eq(i).attr("songID");
        if (currentSongId != "" && currentSongId != undefined && currentSongId !="-1") {
            strArrSongID = strArrSongID + currentSongId + ";";
        }
    });
    // 곡 아이디 중복 제거 처리
    return sidDistinctCommon(strArrSongID);
}

/**
 * br문자열을 개행문자열로 치환<p>
 * @param str
 * @returns
 */
String.prototype.br = function() {
    return this.replace(/<br\s*[\/]?>/gi, "\n");
}

/**
 * 문자열 Null 체크<p>
 * @param str
 * @returns
 */
String.prototype.isEmpty = function() {
    if(this == null || this == "") {
        return true;
    }

    return false;
}

/**
 * 문자열 Null 체크<p>
 * @param str
 * @returns
 */
String.prototype.isNotEmpty = function() {
    if(this == null || this == "") {
        return false;
    }

    return true;
}



var StringUtils = {
    /**
     * String 문자열을 boolean형으로 변환
     * @param string
     * @returns
     */
    stringToBoolean : function(string) {
        try {
            switch(string.toLowerCase()){
                case "true": case "yes": case "1": return true;
                case "false": case "no": case "0": case null: return false;
                default: return Boolean(string);
            }
        } catch(err) {
            return false;
        }
    },

    /**
     * 문자열 empty 체크
     * @param val
     * @returns {Boolean}
     */
    isEmpty : function(val) {
        var undef, key, i, len;
        var emptyValues = [undef, null, false, 0, '', '0'];

        for (i = 0, len = emptyValues.length; i < len; i++) {
            if (val === emptyValues[i]) {
                return true;
            }
        }

        if (typeof val === 'object') {
            for (key in val) {
                return false;
            }
            return true;
        }

        return false;
    }
}

/* URL Decoding */
function URLDecode(txt) {
    if (txt==undefined || txt==null || txt=="") {
        return txt;
    }

    var HEXCHARS = "0123456789ABCDEFabcdef";
    var encoded = txt;
    var plaintext = "";
    var i = 0;
    while (i < encoded.length) {
        var ch = encoded.charAt(i);
        if (ch == "+") {
            plaintext += " ";
            i++;
        } else if (ch == "%") {
            if (i < (encoded.length-2) && HEXCHARS.indexOf(encoded.charAt(i+1)) != -1 && HEXCHARS.indexOf(encoded.charAt(i+2)) != -1 ) {
                plaintext += unescape( encoded.substr(i,3) );
                i += 3;
            } else {
                plaintext += ch;
                i++;
            }
        } else {
            plaintext += ch;
            i++;
        }
    }
    plaintext = plaintext.replace(/%2C/gi,",")
    return plaintext;
};


// FG_badge_tost
var FG_badgeTost = function(text){
    var badge_layer = $('#badge_tost');
    var up = function(){
        if (text) badge_layer.find('p strong').html(text);
        badge_layer.fadeIn();
    }
    var down = function(){
        badge_layer.fadeOut();
    }
    up();
    var fadeOut = setTimeout(down, 2000);
    badge_layer.find('.layer-close').bind('click', function(){
        down();
        clearTimeout(fadeOut);
    });
    badge_layer.bind('mouseenter', function(){
        clearTimeout(fadeOut);
    });
}

function fnShare(type, seq, title, imgUrl, content) {
    //alert(title + ":" + imgUrl + ":" + content);
    var path = document.location.pathname;
    var para = document.location.href.split("?");
    var rfr = path + "?" + para[1];

    rfr = rfr.replace("#", "");

    $('#snsTitle').val(title);
    $('#snsImgUrl').val(imgUrl);
    $('#snsContent').val(content);
    $('#snsRfr').val(rfr);
    $('#snsType').val(type);
    $('#snsSeq').val(seq);

    $("#frmShare").attr("action","/share");
    $("#frmShare").submit();
}

function fnSmsSend() {
    $.ajax({
        type: "POST",
        url: "/Includes/Commons/Module/jMusicLikeProc",
        dataType: "json",
        data: { "unm": iMemUno, "mltp": likeType, "mlsq": selectArrID },
        success: function (responseData) {
            retCode = responseData.Result.RetCode;
            if (retCode == "0") {
                likeCnt = responseData.DATA0.LikeCount;
                retBadgeMsg = responseData.DATA0.BADGE_MSG;

                //뱃지 발급 안내
                if (retBadgeMsg != ""){
                    FG_badgeTost(retBadgeMsg);
                } else {
                    alert('좋아요 되었습니다.');
                }

                if (fnSuccess) {
                    fnSuccess(retCode+"|"+likeCnt);
                }
            } else {
                likeCnt = 0;
                if (retCode == "E00021") {
                    retCode = "2";
                } else {
                    retCode = "1";
                }

                if (fnSuccess) {
                    fnSuccess(retCode+"|"+likeCnt);
                }
            }
        }
    });
}

//로그인처리
function fnCommonLogin(url) {
    if (vmd == "A"){
        executeApp("20", url, true, vmd);
        return false;
    }else{
        $("#frmLogin").append("<input type='hidden' name='rtnURL' value='" + url + "'>");
        $("#frmLogin").attr("action","/login/login");
        $("#frmLogin").submit();
    }
}

//쿠키값등록
function setCookie(c_name,value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

//쿠키값가져오기
function getCookie(c_name) {
    var i, x, y;
    var ARRcookies=document.cookie.split(";");

    for (i=0;i<ARRcookies.length;i++){
        x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x = x.replace(/^\s+|\s+$/g,"");
        x = x.replace("\"","");
        x = x.replace("%5F", "_");

        if (x == c_name) {
            return unescape(y);
        }
    }
}

function fnShowAlert(msg, ok) {
    msg = msg.replace(/\n/gi, "<br>");
    $('#layerAlert .txt').html(msg);
    if(ok != null) {
        $('#layerAlert .btn-pop:eq(0)').unbind('click');
        $('#layerAlert .btn-pop:eq(0)').one('click', ok);
    }
    FG_layerPopup.show($('#layerAlert'));
}

function fnShowConfirm(msg, cancel, ok) {
    $('#layerConfirm .txt').html(msg);
    if(cancel != null) {
        $('#layerConfirm .btn-pop:eq(0)').unbind('click');
        $('#layerConfirm .btn-pop:eq(0)').one('click', cancel);
    }
    $('#layerConfirm .btn-pop:eq(1)').unbind('click');
    $('#layerConfirm .btn-pop:eq(1)').one('click', ok);
    FG_layerPopup.show($('#layerConfirm'));
}

function fnShowToast(msg) {
    $('#layerToast .txt').html(msg);
    FG_toastPopup.show($('#layerToast'));

    setTimeout(function() {
        FG_toastPopup.hide($('#layerToast'));
    }, 3000);
}

function fnShowToastConfirm(msg, cancel, ok) {
    $('#layerToastConfirm .txt').html(msg);
    if(cancel != null) {
        $('#layerToastConfirm .btn-pop:eq(0)').one('click', cancel);
    }
    $('#layerToastConfirm .btn-pop:eq(1)').one('click', ok);
    FG_toastPopup.show($('#layerToastConfirm'));
}

function fnGoMenu(cd, params) {
    if (params == null || params == "") {
        params = "";
    }

    /*
     * TO-DO : 당장 매거진 뮤직비디오 재생에 필요한 landingtype만 정의했으나 추후 모든 랜딩 타입 정의해야 함
     */
    if(vmd == "A") {
        if(cd == "59") {
            var arrParams = split(params, ";"),
                streamURL = arrParams[0],
                grade = arrParams[1],
                adultYn = arrParams[2];

            if(gSeparator == "DI") {
                document.location.href = "ioscallback$goMenu$59$" + streamURL + ";" + grade + ";" + adultYn;
            } else {
                window.Interface.playMovie(streamURL, grade, adultYn);
            }
        } else {
            executeApp(cd, params, false, vmd);
        }

    } else {
        switch(cd) {
            case "31":
                fnPlaySong(params);
                break;

            case "39":  //뮤직비디오 재생(MV_ID)
                fnPlayMovie('id', params);
                break;

            case "59":  //뮤직비디오 재생(CDN URL 용)
                fnPlayMovie('url', params);
                break;
        }
    }
}

function fnGoLogin() {
    var rtnUrl = location.href;
    location.href = "https://mw.genie.co.kr/login/login?rtnURL=" + escape(rtnUrl);

    FG_layerPopup.hide($('#layerConfirm'));
    FG_toastPopup.hide($('#layerToastConfirm'));
}

function fnGoProductMain() {
    location.href = "/product/productMain";

    FG_layerPopup.hide($('#layerConfirm'));
    FG_toastPopup.hide($('#layerToastConfirm'));
}

function setDetailHeaderV2(title_obj, title) {
    if(typeof title_obj == 'undefined' || typeof title == 'undefined') return false;

    $(window).scroll(function() {
        var t = $(window).scrollTop();
        if(t > 0) {
            $('.header').addClass('mask');
            $('.header h1').not('#agreementTitle, #privacyTitle').html(title_obj.html());
        } else {
            $('.header').removeClass('mask');
            $('.header h1').not('#agreementTitle, #privacyTitle').html(title);
            $('.header h1#shareTitle').html('공유하기');
        }
    });
}

//swipe event
function swipedetect(el, callback){
    var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function(swipedir){};

    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0];
        swipedir = 'none';
        dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface
        e.preventDefault();
    }, false);

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault(); // prevent scrolling when inside DIV
    }, false);

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir);
        e.preventDefault();
    }, false);
}

var fnCommonEmailChk = function (email) {
    var isEmail = (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(email);

    if (email.length < 5){
        isEmailChk = false;
        fnShowAlert("이메일을 기입 해주세요.");

    } else if (isEmail == false){
        isEmailChk = false;
        fnShowAlert("이메일 형식이 잘못 되었습니다.");

    } else {
        isEmailChk = true;
    }

    return isEmailChk;
}
