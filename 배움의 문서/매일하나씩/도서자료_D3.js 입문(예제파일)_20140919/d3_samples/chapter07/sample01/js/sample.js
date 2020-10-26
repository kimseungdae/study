var svgHeight = 240;	// SVG 요소의 높이
var barElements;	// 막대그래프의 막대 요소를 저장할 변수
var dataSet = [120, 70, 175, 80, 220];
// 그래프 그리기
barElements = d3.select("#myGraph")
	.selectAll("rect")	// rect 요소를 지정
	.data(dataSet)	// 데이터를 요소에 연결
// 데이터 추가
barElements.enter()	// 데이터 수만큼 반복
	.append("rect")	// 데이터 수만큼 rect 요소가 추가됨
	.attr("class", "bar")	// CSS 클래스 설정
	.attr("height", function(d,i){	// 넓이 설정. 2번째의 파라미터에 함수를 지정
		return d;	// 데이터 값을 그대로 높이로 지정
	})
	.attr("width", 20)	// 넓이 지정
	.attr("x", function(d, i){
		return i * 25;		// X 좌표를 표시 순서×25로 함
	})
	.attr("y", function(d, i){	// Y 좌표를 지정
		return svgHeight - d;	// Y 좌표를 계산
	})
