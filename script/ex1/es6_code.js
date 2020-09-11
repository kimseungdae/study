

/*클래스(Class)
* 클래스 문법은 class 키워드, 클래스 이름, 생성자 함수인 constructor(), 메서드들, 클래스 상속을 위한 extends 키워드
* 그리고 정적 멤버인 static 키워드로 구성되어 있다. 클래스를 선언할 때는 class 키워드 뒤에 클래스의 이름을 적어주고, 다른 클래스의
* 멤버를 상속하기 위해서는 extends 키워드 뒤에 상속받을 클래스를 작성하면 된다. 클래스도 함수 사용과 같이 선언식과 표현식 두 가지로 사용할 수 있다.
* */

class SomeClass {
    static staticClassMethod() {
        // 정적 메서드
    }

    constructor() {
        // 생성자 함수
    }

    someMethod() {
        // 클래스 매서드
    }
}

const instance = new SomeClass();
instance.someMethod();

SomeClass.staticClassMethod();


/*프로토타입 기반 클래스
* 클래스 문법이 없는 ES5에서는 생성자 함수와 그 함수의 프로토타입 개체를 확장해서 클래스를 흉내 낼 수 있다.
* 생성자 함수로 인스턴스 객체에 속성을 설정할 수 있고 프로토타입 체인을 이용해서 인스턴스 내에 메서드를 새엇ㅇ하지 않고 같은 메서드를
* 모든 객체에서 공유할 수 있다. 하지만 이런 구현 방법은 실수를 유발할 수도 있으며, 문법이 같기 때문에 일반 함수인지 클래스 생성자 함수인지
* 혼동되어 코드 가독성이 좋지 않다.
* 그래서 ES6에서는 어느 코드가 클래스이고 생서자 함수인지 쉽게 확인할 수 잇고, 메서드도 클래스 내부에 캡슐화되어 가독성이 좋아졌다.
* */


class textExemple{
    constructor(name) {
        this.name = name;
    }
    sayMyName(){
        console.log(`My name is ${this.name}`);
    }
}

const fred = new textExemple('홍길동').sayMyName();


/*개선된 객체 리터럴(Object literal)
* ES6에서는 객체 리터럴의 key 텍스트와 value에 올 변수 이름이 같은 경우 한 번만 입력해도 된다.
* 기존 객체 리터럴에서 반복적으로 입력했던 콜론(:)과 변수명을 한 번의 입력으로 해결할 수 있다.
* */

const iPhone = '아이폰';
const iPad = '아이패드';
const iMac = '아이맥';

const appleProducts = {iPhone,  iPad,  iMac};


/*축약형 메서드 이름
*그리고 객체의 메서드를 정의할 때 유용한 축약형 메서드 이름도 지원한다. function 키워드와 메서드 이름 뒤의 콜론은 생략할 수 있다
* */
const dog = {
    name: 'Lycos',
    bark() {
        console.log('Woof! Woof!')
    }
};

dog.bark(); // 'Woof! Woof!';


/*계산된 값 사용 가능
*ES5에서는 객체를 먼저 생성 후 [] 접근자를 이용해서 동적으로 프로퍼티 할당을 해주었지만,
* ES6부터는 표현식의 연산 값을 객체의 키로 사용할 수 있게 되었다.
* 사용법은 객체 프로퍼티의 키가 올 자리에 [,]로 감싸진 표현식을 작성하면 된다.
* */

const ironMan = 'Iron Man';
const captainAmerica = 'Captain America';

const MarvelHeros = {
    [ironMan]: 'I`m the Iron Man.',
    ['Groot']: 'I am Groot.',
    [captainAmerica]: 'My name is Steve Rogers.',
    ['3-D' + 'MAN']: 'I`m the 3-D Man!'
}
console.log(MarvelHeros);


/*템플릿 리터럴(Template literal)
*템플릿 리터럴 문법은 백 틱(`)으로 감싸진 문자열로 이루어져 있다.
* 기존의 문자열 조작 시에는 각기 분리된 문자열 리터럴을 + 연산자로 연결해주어야 했다면,
* 템플릿 리터럴은 내부에 표현식을 바로 작성하여 더욱더 간결한 문법으로 구현할 수 있다.
* 문자열 사이에 표현식의 리턴 값을 추가하려면 표현식이 올 자리에 ${expression}를 작성하면 된다.
* */

const brandName = 'TOAST';
const productName = 'UI';

console.log(`Hello ${brandName} ${productName}!`); // 'Hello TOAST UI!';


/*변수 선언
*먼저 변수의 프로퍼티를 쉽게 선언하는 예제이다.
* 객체 디스트럭처링은 변수로 선언하고자 하는 객체의 프로퍼티명을 {, }안에 나열하면
* 각 프로퍼티의 이름으로 변수가 생성되고 프로퍼티의 값이 자동으로 할당된다.
* 배열 디스트럭처링도 비슷한데 [, ] 안에 나열하는 변수의 이름에 맞는 인덱스의 배열 요소가 변수의 값으로 할당된다.
* */

function printUserInformation(data) {
    const {name, age, gender, hobbies} = data;
    const [firstHobby] = hobbies;

    console.log(`이름: ${name}`);
    console.log(`나이: ${age}`);
    console.log(`가장 좋아하는 취미: ${firstHobby}`);
}


/*파라미터 내부 변수 선언
* 파라미터로 받은 객체의 프로퍼티를 변수로 선언하여 사용할 수 있다.
* 이때는 별도의 변수 선언문 없이 파라미터의 위치에 디스트럭처링 코드를 작성하면 된다.
* 선언할 변수의 이름은 기존 객체에 선언된 이름 말고 다른 이름으로도 선언 가능하다.
* */
function printError({ errorCode, errorMessage: msg} ){
        console.log(`에러코드: ${errorCode}`);
        console.log(`메시지: ${msg}`);
    }


/*배열 및 객체 확장 예제
* 새로운 배열에 다른 배열의 요소를 한 번에 추가하거나 새로운 객체에 다른 객체의 프로퍼티들을 추가할 때도 코드가 훨씬 깔끔하게 유지된다.
* 새로운 객체를 만드는 경우, Spread 표현식의 계산 결과로 인해 중복되는 키가 생긴다면 가장 나중에 작성된 표현식이 할당된다.
* */

const friends = ['Jack', 'Jill', 'Tom'];
const anotherFriedns = [...friends, 'Kim'];

const drinks = {
    coffee: 'coffee',
    juice: 'orange juice'
};
const newDrinks = {
    ...drinks,
    juice: 'tomato juice',
    water: 'water'
};


/*제너레이터(Generator)
* ES6의 제너레이터는 Generator 생성자나 function* 키워드로 선언한다.
* 제너레이터는 코드의 진행 흐름에서 잠시 빠져나갔다가 다시 돌아올 수 있는 함수이다
* */

function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = gen();

console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // 3
console.log(g.next().value); // 4
console.log(g.next().value); // undefined


/*프로미스(Promise)
* 프로미스는 비동기 처리가 추상화된 객체이다.
* 사용자가 작성한 비동기 처리가 완료되거나 실패되었는지 알려주고 비동기 처리 결괏값을 반환해준다.
* 이를 통해 성공 시 실행할 함수, 실패 시 실행할 함수를 등록해서 편리하게 비동기 처리 코드 작성이 가능하다.
* 프로미스를 이용하면 비동기 처리를 위한 콜백 함수들로 여러 겹 감싸진 콜백 지옥 코드를 간결하게 작성할 수 있다. 문법부터 천천히 살펴보자.
* */

const getRandomNumberFromServer = () => Math.ceil(Math.random() * 100);
const checkNumIsExceedTen = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = getRandomNumberFromServer();

        if(Number.isNaN(num)) {
            throw new Error('Value that from server must be a "number" type.');
        }

        if (num > 10) {
            resolve(num);
        } else {
            reject(num);
        }
    });
});

checkNumIsExceedTen
    .then((num) => {
        console.log(`'num' is ${num}. It is exceed 10.`);
    }, (num) => {
        console.log(`'num' is ${num}. It is not exceed 10.`);
    })
    .catch((error) => {
        console.log(error.message);
    });


/*콜백 피라미드 개선하기
* 기존 ES5에서는 비동기 처리를 하기 위해서 보통 콜백 지옥,
* 콜백 피라미드라고 하는 형태의 코드를 작성했다.
* 어떤 비동기 처리의 결과를 전달받는 함수를 콜백 함수의 형태로 계속 생성하고
* 최종 결과를 가장 안쪽의 콜백 함수에서 전달받아 실행이 종료된다.
* */

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 100);
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // [3, 1337, "foo"]
});

Promise.race([p1, p2, p3]).then(value => {
    console.log(value); // 3
});
