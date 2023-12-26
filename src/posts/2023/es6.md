# ES6

> 자바스크립트파워북 책 요약

## var, let, const

- let 은 전역객체 this. 로 접근 불가능. 자신의 scope블록과 선언된 블록의 하위 블록에서만 접근 가능
- let 권장
- var 변수는 호이스팅 발생.
- 호이스팅이란 런타임 시점에 함수 맨 위로 선언이 이동하는것. 스크립트형 언어인 자바스크립트가 변수나 함수가 선언되지 않은 상태에서 사용할 수 있도록 해주는 기반이 되는 기법이다.

```js
let sum = sum + 10; // error
var sum2 = sum2 + 10;
```

## 원시형, 참조형

- 원시형 : 숫자형(Number), 불리언형(Boolean), 문자형(String), 심볼형(Symbol), Null, Undefined
- 참조형 : 객체

## 자료형변환

- NaN : Not a Number. 문자 -> 숫자형 불가능 한 경우 NaN 리턴
- Infinity(무한) ex) 1/Infinity
- parseInt(), parseFloat()
- toString(), (3.14).toString()
- toFixed() : 소수점 자리수 설정
- Math.floor() : 내림
- Math.ceil() : 올림
- Math.round() : 소수점 숫자가 가까운 쪽의 정수 반환
- Math.trunc() : 소수점 이하 모두 버리고 정수형으로
- Math.abs() : 숫자의 부호 없앰.
- Math.sign() : 숫자의 부호 알려줌.

> 자바스크립트에는 -0 이 존재함
> NaN 와 Infinity는 숫자값은 아니지만 숫자 타입으로 정의툄
> 자바스크립트에는 소수점 오류를 내재하고 있음. 정밀한 단위의 소수점 단위 합계를 누적하거나 차감하는 경우 최종 값이 실제 값과 차이나는 경우가 발생 할 수 있다.
> Number.MAX_SAFE_INTEGER를 초과해서는 안된다

# Null, Undefined, 0

- Null : 변수가 빈값
- undefined : 변수가 정의되지 않음

```js
let a = null;
let b; // 사용 지양할것!!
a == b ? "같음" : "다름"; // 같음
a === b ? "같음" : "다름"; // 다름
```

## for ~ of 문

배열, 문자열, 맴, 셋. 일반 객체에는 사용할 수 없음

```js
let friends = [
  { name: "라이언", age: 5 },
  { name: "어피치", age: 4 },
  { name: "콘", age: 2 },
  { name: "무지", age: 3 },
];
for (let friend of friends) {
  console.log("이름 : " + friend.name + " 나이: " + friend.age);
}
```

## for ~ in

객체 사용 가능. 배열,문자열, 맵, 셋 에 사용할 경우 배열의 인덱스 값만 반환되므로 주의  
객체의 속성과 속성값 나열.

```js
let ryon = { name: "라이언", age: 5, gendor: "male" };
for (let prop in ryon) {
  console.log("속성: " + prop + "값 : " + ryon[prop]);
}
```

## forEach

```js
let friends = [
  { name: "라이언", age: 5 },
  { name: "어피치", age: 4 },
  { name: "콘", age: 2 },
  { name: "무지", age: 3 },
];
friends.forEach(function (friend, idx) {
  console.log("이름 : " + friend.name + " 나이: " + friend.age);
});
```

## 함수

- 함수 선언문 형태

```js
function myFunc(param) {
  console.log(param + "run!");
}
```

- 함수표현식
  > 리터럴 : 변수에 값이나 객체, 함수 등을 대입해 변수 자체가 대상을 가리키도록 하는 것을 말한다. 대상이 함수이면 함수 선언 내용을 함수 리터럴 이라고 한다. 대상이 객체이면 객체리터럴

```js
const myFunc2 = function (param) {
  console.log(param + "run!");
};
```

## 파라메터

- 추가 인자 값은 arguments를 통해 접근 가능
- 파라메터 개수보다 인자 개수가 적을 경우 남는 파라메터에는 'Undefined' 가 전달됨
- 기본 파라메터(Default Parameter, ES6) : 파라메터의 기본값 설정 `funcion sum(a = 0, b=0) {}`
- 나머지 파라메터(Rest Parameter, ES6) : 파라메터 개수를 가변으로 사용 `funcfion myFunc(...args) {}` `function myFunc(a, b, ...args)`

## 커링(curring)

한번에 인수를 하나만 받는 함수를 커링 또는 파샬 어플리케이션이라고 한다. 복잡한 파라메터를 넘겨서 복합한 처리를 하는 하나의 자바스크립트 함수를 단순하고 읽기 쉬운 여러개의 나누어진 부분으로 만드는 기법.
n개의 파라미터를 n차 뎁스(Depth)를 가진 함수로 분리 하는 것.

```js
function orderSet(burger, beverage) {
  console.log("세트: " + burger + ", " + beverage);
}
orderSet("치즈버거", "콜라");
```

커링으로 해체하면

```js
function orderSet(burger) {
  return function (beverage) {
    console.log("세트 : " + burger + ". " + beverage);
  };
}
let order = orderSet("치즈버거");
order("콜라");
order("커피");
orderSet("치즈버거")("콜라");
```

화살표함수로 사용 가능

```js
function orderset1(burger, beverage, side, yn, count) {
  console.log(burger + beverage + side + yn + count);
}
function orderSet2(burger) {
  return function orderBeverage(beverage) {
    return function orderSide(side) {
      return function orderKetchup(yn) {
        return function orderChicken(count) {
          console.log(burger + beverage + side + yn + count);
        };
      };
    };
  };
}
const orderSet3 = (burger) => (beverage) => (side) => (yn) => (count) => {
  console.log(burger + beverage + side + yn + count);
};
let order = orderSet2("치즈버거")("콜라");
console.log(order("프렌치후라이")("Y")("2"));
```

# 펼침연산자(spread operator), 전개구문, 나머지파라메터

- 펼침연산자 = 확장연산자 = 스프레드오퍼레이터 : ...
- 전개구문 : 펼침연산자로 작성한 코드
- 함수, 메서드를 정의할때 파라메터에 펼침 연산자를 붙여 정의하면 나머지파라메터가 됨.
  맨 마지막 위치의 파라메터에만 사용 가능

```js
let calc = function (x, y, ...restparams) {
  return (
    x +
    y +
    restparams.reduce(function (sum, param) {
      return sum + param;
    })
  );
};

var parts = ["sholers", "knees"];
var lyrics = ["head", ...parts, "and", "toe"];

var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
var mergeobj = { ...obj1, ...obj2 };
```

화살표 함수와 리듀스 활용

```js
const sum = (a, b, ...args) => {
  let result = 0;
  result += args.length > 0 ? args.reduce((subsum, arg) => (subsum += arg)) : 0;
  return result;
};
```

## 화살표 함수

```js
function add(a+b){
    return a+b
}
let addf = (a,b) => a+b;
```

| 규칙 |조건 | |
| --- | ----- |--|
| 파라메터 | 0개| 빈괄호 반드시 표기 `()=>{}` |
| 파라메터 | 1개| 생략가능 `arg1=>{}` |
| 파라메터 | 2개 이상| ()로 파라미터들을 감싸서 표기 `(arg1, arg2) => {}`|                                                
| return 구문 | 블록{} 으로 코드를 감싼 경우 |  반환할 값이 있으면 반드시 return 문으로 반환|
| return 구문 | 블록으로 감싼 코드에 return문이 없을 경우 | `undefined` 반환됨.  |
| return 구문 | 블록을 생략할 경우  |`return` 또한 생략 가능|

## 고차함수 (High-order function)

- 고차함수 : 함수를 인자로 받거나, 다른 함수를 반환하는 함수
- 고차함수 예 (map 함수에 인자로 함수를 넣음) : `const arr2x = arr.map(item=>item*2)`
- 일급 함수(First-Class) : 인자를 전달할 수 있고, 반환값을 반환할 수 있는, 변수에 담아 호출할 수 있는 객체 또는 함수를 말한다.

## 변수의 스코프와 스코프 체인

- var는 let과 달리 블록, 구문 단위의 스코프 구분이 없다. 자바스크립트 호이스팅에 의해 변수 정의가 함수 맨 위로 끌어올려지기 때문에 함수 내부 전역 변수로 처리됨.
- 자바스크립트는 변수명을 중복 선언해도 에러가 나지 않음.
- 함수가 중첩되거나, 함수에서 다른 함수를 호출하는 경우 함수 스코프 체인에 따라 변수 선언을 찾게 된다. 호출한 함수를 역으로 올라가면서 변수를 찾고, 최종적으로 전역 변수를 찾게 됨.

## 생성자 함수 (Generator Function)

- 결론부터 말하면 현재 이 방법은 거의 사용되고 있지 않음.
- `function*` 이렇게 함수를 선언하면 생성자 함수로 선언한 것.

## 예외처리 throw, try~catch~finally

`throw '사용자 지정 에러 메시지!'`

```js
try{
// 실행하다가 에러 발생하면 catch 블록으로 실행 제어가 넘어감
} catch (ex) {
// catch 블록은 exception 객체를 넘겨받게 된다.
} finally {
// 무조건 실행된다.
// finally 블록은 생략 가능.
}
```

## 클래스 

ES6 부터 도입됨. 다른 언어의 클래스에 비해 단순한구조. 생성자 함수(constructor())라는 초기화 함수가 고정으로 있고 클래스 상속 등의 구조가 단순. 함수형 언어에 클래스 개념이 들어간다는것은 다소 어색할 뿐 더러 개발자들에게 큰 관심을 받지도 못함. 그리고 자바스크립트에는 클래스와 유사한 구조고 클래스처럼 동작하는 `객체 리터럴` 이라는 뛰어난 데이터 구조가 이미 있음. 현재의 추세는 객체 리터럴로 가볍게 구현해 사용.

다른 언어의 클래스는 객체 인스턴스를 생성하면 클래스의 모든 속성과 메서드를 복사하지만 자바스크립트의 클래스는 인스턴스를 생성하면 정의한 클래스(클래스로 정의하지만 사실상 프로토타입인) 메서드 참조만을 생성함.

## 프로토타입 

인스턴스를 생성할때 메서드를 복제(메모리에 복사본 생성)하지 않고, 프로토타입에 대한 연결(참조)을 생성한다. 다른 언어의 클래스는 객체 인스턴스를 생성하면 클래스의 모든 속성과 메서드를 복사하지만 자바스크립트의 클래스는 인스턴스를 생성하면 정의한 클래스(클래스로 정의하지만 사실상 프로토타입)의 메서드 참조만을 생성한다. 프로토타입에 새 메서드를 추가하면 이미 생성한 인스턴스에서 새 메서드를 즉시 사용할 수 있음.

## this

자바스크립트에서 this 는 객체 자신을 가리키는 지시자. this 지시자의 객체 참조는 호출 시점에 결정됨. 

`outerFuncRef()`  

객체 참조를 파라미터로 넘기는 대신 `호출함수명.bind(this)` bind 함수로 객체 메서드 안에서 추가 선언한 함수, 또는 외부 객체 참조를 넘길 수 있다.

## 클로저(closure)

만들어진 시점의 실행 환경을 기억하는 함수. 

```js
function outerFunc(name) {
  let saying = name + ' 안녕!;
  return function() { // 익명 함수를 반환
    return saying;
  }
  let closure1 = outerFunc('라이언');
  let closure2 = outerFunc('콘');

  console.log(closure1);
  console.log(closure2);
}
```
outerFunc()는 이미 종료되어 로컬 변수인 saying 도 사라져야 하지만 반환된 클로저를 실행하면 saying 변수의 값 출력

실행될때마다 각각의 참조 데이터를 유지해야 하기 때문에 메모리 사용량이 늘어남. 클로저는 사용 후에는 메모리를 해제. `closure1 = null;`

## 객체 

- `키 : 밸류` 쌍
- 객체 리터럴 : 함수를 객체에 저장할 수도 있다. 객체안에 저장된 함수는 객체안의 데이터를 자유롭게 접근 가능. 이렇게 데이터와 함께 객체를 처리하는 메서드를 구현해서 사용하는 방식을 객체 리터럴 이라고 한다.
- 객체 문자열 값은 쌍따옴표 사용 권장(JSON Javascript object notation 규칙).

## 객체의 단축 속성명, 단축 메서드명, 계산된 속셩명

es6. 브라우저 호환성 문제 있음. 크롬과 파이어폭스에서만 지원 일부 데스크탑용 브라우저와 대부분의 모바일 브라우저에서는 지원되지 않음. 

- 단축속성명 : 미리 선언한 변수를 나열함으로써 객체 생성

```js
let name = '라이언';
let age = 5;
let getName = function(){
  return this.name;
}
let friends = {name, age, getName};
```

- 단축 메서드명 : 객체에 메서드를 포함할 경우 `function` 표시를 생략

```js
let calc = {
  add(a,b) {return a+b;},
  multiply(a,b) {return a*b;},
  substract(a,b) {return a-b;}
}
```

- 계산된 속성명 : [] 로 속성 이름을 감싸면 속성 이름을 동적으로 만들 수 있음.

```js
let obj = 0;
let obj = {["name" + ++idx]:idx, ["name" + ++idx]:idx, ["name" + ++idx]:idx,}
```

## 객체 복사, 상속

- 객체 복사

자바스크립트 객체는 객체리터럴 {} 로 선언. 객체 변수는 객체 리터럴로 선언한 객체를 참조하는 참조 주소의 역할

```js
// originalObj 변수는 객체의 참조 주소만을 담고 있는 참조 변수의 역할
let originalObj = {name : "ryon", age:5, changeAge(){this.age+=1}}
// referenceObj 변수는 같은 객체 참조 주소를 복사해 가지게 됨
let referenceObj = originalObj;
// 객체를 복사하려면 객체 메서드인 assign() 을 사용
let copyObj = Object.assign({},originalObj);
```
> **assign() 메서드 원칙**
> 1. 없는 속성은 추가
> 2. 중복되는 속성은 원본 객체(두번째 파라메터)의 속성 값으로 덮어 쓴다
> 3. 중첩된 객체를 복사할때 객체 속성에 하위 객체가 정의된 경우 객체가 복사되는게 아니라 객체의 참조만 복사됨

```js
let objSource = {item1:"라이언", item2:"어피치", item3:{group:"friends", age:3}};
let objClone = Object.assign({},objSource);
// 이렇게 복사하게 되면 세번째 속성은 객체의 데이터가 복사되는것이 아니라 객체의 참조 주소만 복사됨.
objSource.item3.age = 5; // objClone.item.age 도 5로 같은 값이 반영되어 보임.
```

- 객체 상속

객체를 상속하면 부모의 모든 속성을 상속. 상속받은 초기 상태에서는 객체의 껍데기만 가지고 있으며, 객체의 각 속성을 참조하는 참조만을 가지고 있다. 먼저 부모 객체의 값을 변경하면 자식 객체는 부모 객체의 속성을 참조하기 때문에 자식 객체는 부모 객체의 변경된 값을 표시. 반대로 자식 객체의 속성을 변경하면 자식 객체는 부모 객체의 값과는 다른 자신의 고유한 속성 값을 가지게 되며 부모와의 상속 관계가 끊어지게 됨. 많은 데이터를 가진 객체의 사본을 만들어 사용할 경우 객체를 상속해서 사용하면 메모리 공간을 많이 절약할 수 있다.

```js
let originalObj = {name : "ryon", age:5, changeAge(){this.age+=1;}};
let childObj = Object.create(originalObj);
childObj.age = 7; // 자식 객체의 속성이 새로 생기고 값이 적용됨.
```

- 객체를 상수로 선언하기

const는 변수의 값을 변경할 수 없도록 선언하는 변수 선언자. 객체를 const로 선언하면 다른 객체를 재할당 할 수 없을뿐, 객체 속성의 값을 변경하는데 아무런 제약이 없다. 객체의 속성 값을 변경할 수 없게 하려면 객체 메서드인 freeze()를 사용해야함.

```js
let obj = {name : "ryon", age: 5, changeAge(){this.age+=1}};
Object.freeze(obj);
obj.age = 7; // age 속성 값을 변경했지만 실제로 적용 되지는 않음.
console.log(obj.age);
```
## 속성 기술자 defineProperty()

getter()/setter() 또는 속성기술자(Property Descriptor). 자바스크립트에서는 속성기술자라는 용어를 더 많이 사용. 자바스크립트에서 제공하는 객체의 속성을 만들고 관리할 수 있는 표준화된 메서드. 객체 사용의 안정성을 위해서 객체 속성을 구현할 때는 속성 기술자의 사용을 권장.

```js
let friends = {}
Object.defineProperty( friends, 'age', {
  get : function() {
    return this._age;
  },
  set : function () {
    if (age < 0) {
      console.log(age + ' 0보다 작은나이');
    } else if (age>=100) {
      console.log(age + ' 100 이상 나이');
    } else {
      this._age = age;
    }
  },
  enumerable : true,
  configurable : true
})
friend.age = 10;
friend.age = -1; // -1 0 보다 작은나이
console.log(friend.age); //10
console.log(friend._age); //10 
console.log(Object.keys(friend)); // ["name", "age", "_age"]
delete friend.age;
console.log(Object.keys(friend)); // ["name", "_age"]
```
|옵션|기본값|설명|
|--|--|--|
|enumerable|false|Object.key()메서드로 객체 키 리스트를 표시할 때 포함할지를 설정|
|configurable|false|속성설정을 수정할 수 있는지를 결정. 속성 키 삭제 가능한지도 함께 결정됨|
|value|undefined|기본값지정|
|writable|true|false면 read-only 상태가 되며, value 값을 수정 할 수 없게됨. 수정하려고 시도해도 오류는 발생하지 않음.|

## 맵 Map

키-밸류 를 한쌍으로 해서 저장되는 데이터 구조. 객체와 사용 방식은 동일하지만 Map의 키에 문자열, 숫자, 객체, 배열, 함수 등 다양한 데이터 형을 키에 사용할 수 있다. 원시 데이터 형을 제외한 나머지 객체형인 데이터를 키로 사용할 경우 변수에 객체를 대입헤 객체의 참조 주소를 담은 변수를 키로 사용해야 함. 맵은 키-값의 추가와 삭제 속도가 일반 객체보다 훨씬 빠르다. 많은 키-값 구조의 데이터를 빈번하게 추가/삭제하는 데이터를 다루는데 유용

```js
const map = new Map();
let arr = [1,2];
map.set(arr,5);
```
- 맵의 키-값 을 관리하는 메서드

|기능|메서드|반환값|
|--|--|--|
|키-값 추가|set(키, 값)|맵의 참조주소 반환|
|키-값 삭제|delete(키)|삭제성공하면 true, 실패하면 false|
|값 얻기|get(키)|키가 있으면 값을 반환 없으면 undefined|
|키-값 전체삭제|clear()|undefined반환|
|키가 있는지 확인|has(키)|키가 있으면 true, 없으면 false 반환|

- 맵의 순환 : 객체의 길이 속성 length 가 아닌 size 속성 사용.
```js
const map = new Map();
map.set('itema',1);
map.set('itemb',2);
map.set('itemc',3);
console.log(map.size);
// 파라미터로 키-값 을 각각 받아 순환
map.forEach(function(value, key){
  console.log(key + value);
})
// 키-값 쌍으로 순환
for(let [key, value] of map.entries()){
  console.log(key + value);
}
// 키만 순환
for( let key of map.keys()){
  console.log(key);
}
// 값만 순환
for (let value of map.value()) {
  console.log(value);
}
```



