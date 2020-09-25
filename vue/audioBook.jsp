<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<c:set var="prdQRFlag" value="N" />
<c:set var="albumTitle" value="" />
<c:set var="adoTitle" value="" />
<c:choose>
	<c:when test="${adoPrdCd eq '000000000009010972'}">
		<c:set var="prdQRFlag" value="Y" />
		<c:set var="albumTitle" value="&lt;내 친구 니노&gt; 오디오북" />
		<c:set var="adoTitle" value="오디오북 1권 '하나도 안 무서워!'" />
	</c:when>
	<c:when test="${adoPrdCd eq '000000000009010973'}">
		<c:set var="prdQRFlag" value="Y" />
		<c:set var="albumTitle" value="&lt;내 친구 니노&gt; 오디오북" />
		<c:set var="adoTitle" value="오디오북 2권 '동생이 태어났어!'" />
	</c:when>
	<c:when test="${adoPrdCd eq '000000000009010974'}">
		<c:set var="prdQRFlag" value="Y" />
		<c:set var="albumTitle" value="&lt;내 친구 니노&gt; 오디오북" />
		<c:set var="adoTitle" value="오디오북 3권 '유치원 안 가!'" />
	</c:when>
	<c:when test="${adoPrdCd eq '000000000009010975'}">
		<c:set var="prdQRFlag" value="Y" />
		<c:set var="albumTitle" value="&lt;내 친구 니노&gt; 오디오북" />
		<c:set var="adoTitle" value="오디오북 4권 '나 안 졸려!'" />
	</c:when>
	<c:when test="${adoPrdCd eq '000000000009010976'}">
		<c:set var="prdQRFlag" value="Y" />
		<c:set var="albumTitle" value="&lt;내 친구 니노&gt; 오디오북" />
		<c:set var="adoTitle" value="오디오북 5권 '내 잘못 아냐!'" />
	</c:when>
	<c:when test="${adoPrdCd eq '000000000009010977'}">
		<c:set var="prdQRFlag" value="Y" />
		<c:set var="albumTitle" value="&lt;내 친구 니노&gt; 오디오북" />
		<c:set var="adoTitle" value="오디오북 6권 '너랑 안 놀 거야!'" />
	</c:when>
	<c:when test="${adoPrdCd eq '000000000009010978'}">
		<c:set var="prdQRFlag" value="Y" />
		<c:set var="albumTitle" value="&lt;내 친구 니노&gt; 오디오북" />
		<c:set var="adoTitle" value="오디오북 7권 '고사리수프는 맛없어!'" />
	</c:when>
</c:choose>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>오디오플레이어</title>
    <meta name="description" content="woongjin thinkbig">
    <meta name="HandheldFriendly" content="True">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <meta http-equiv="cleartype" content="on">
    <link rel="stylesheet" href="/static/pc/css/animate.css">
    <link rel="stylesheet" href="/static/pc/css/audio.css">
    <script src="/static/pc/js/hls.js"></script>
</head>
<body>

<div class="audio_wrap">
    <header class="hdr">
    <c:choose>
		<c:when test="${prdQRFlag eq 'Y'}">
		<h1>오디오북 듣기</h1>
		</c:when>
		<c:otherwise>
        <button type="button" class="bt_left" onclick="audioFn.stepBack()">뒤로</button>
        <h1>오디오북 듣기</h1>
        <button type="button" class="bt_right" onclick="window.history.back()">닫기</button>
        </c:otherwise>
    </c:choose>
    </header>
    <section class="container">
   	<c:choose>
		<c:when test="${prdQRFlag eq 'Y'}">
		<video id="video1" width="320" height="240" style="width:100%;margin:0 auto;" controls>

		</video>
		</c:when>
		<c:otherwise>
    	<c:if test="${albumList != null}">
        <article class="audio_album">
            <c:forEach var="item" items="${albumList}" varStatus="status">
            <div class="list cul1" id="cul1_${ item.adoBookCode }">
                <div class="list-item">
                    <div class="visual">
                        <img src="http://down.wjthinkbig.com/BOOKCLUB/${item.adoImgUrl}" alt="앨범 썸네일">
                    </div>
                    <span class="tit">${ item.setBookName }</span>
                </div>
            </div>
            </c:forEach>
        </article>
        <article class="album_list">
            <div class="list cul2"></div>
        </article>
        <article class="audio_list">
            <div class="audio_cover">
                <div class="visual" id="titleCover">
                    <!-- <img src="http://cache.wjthinkbig.com/WEB_RESOURCE/ONLINEMALL/product/audio/${adoPrdCd}.jpg" style="visibility: visible;"> -->
                </div>
                <div class="tit" id="albumTitle">${albumTitle}</div>
            	<button type="button" id="testButton" onclick="secUrlSetter('000000000009010972', 'LOUNGE/GO/MP3/QR/000000000009010972.MP3')"><i class="icon headset"></i></button>
            </div>
            <div class="audio_control">
                <div class="count" id="albumCount">
                    <em id="emCnt">1</em>곡
                </div>
            </div>
            <div class="audio_list_table">
                <ul id="audioList">

                </ul>
            </div>
        </article>
        </c:if>
        </c:otherwise>
    </c:choose>
    </section>
</div>

<!--  js_sub.jsp-->
<script src="/static/pc/js/vendor/jquery-2.1.0.min.js"></script>
<script src="/static/pc/js/audio.js"></script>
<!--  //js_sub.jsp-->
<script>
	var prdQRFlag = '${prdQRFlag}';
	if (prdQRFlag == 'Y'){
		secUrlSetter('${adoPrdCd}', 'LOUNGE/GO/MP3/QR/${adoPrdCd}.MP4');
	}else{
		audioFn.init();
	}
</script>
</body>
</html>
