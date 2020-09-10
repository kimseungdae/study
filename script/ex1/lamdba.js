/****** 일반 함수와 람다식 표현 ******/

let logTmp;
console.log = () => {
    logTmp = this;
}

//일반 함수
let normalFunc = function(x){
    console.log(x);
    textFn(x);
}

//람다식 함수
let arrowFunc = (y) => {
    console.log(y);
}

//호출
normalFunc('일반 함수')
arrowFunc('람다식 함수')

//람다식 생략 예제

let arrowFn = (z) => console.log(z);//함수에서 return만 있는 경우라면 람다식 생략을 사용해 간단하게 작성할 수도 있다.

//호출
arrowFn('람다 생략부분')

/*
하지만 람다식은 소스를 간략하게, 짧게 바꾸기 위해서 사용하는 것은 위험할 수도 있습니다.
이유는 this 값을 고정하기 때문입니다.

자바스크립트에서 기본적으로 this를 사용하면 자기 자신을 의미합니다.
*/

//일반 함수 this 예제

param = 'global param';

function printParam(){
    console.log(this.param);
}

let object = {
    param : 'object param',
    func: printParam
}


object.func();

/*
* 결과를 보면 printParam 함수 안에서 사용 하고 있는 this.param값은 함수를 호출하고 있는 object 지정한 값을 출력하고 있다.
* */

//람다식 합수 this 예제

let printArrParam = () => {
    console.log(this.param);
}

printArrParam();
