# 맨날봐도 헷갈리는 ES6

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

| 규칙 조건        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 파라메터         | - 0개: 빈괄호 반드시 표기 `()=>{}` <br/> - 1개 : 생략가능 `arg1=>{}` <br/> - 2개이상 : ()로 파라미터들을 감싸서 표기 `(arg1, arg2) => {}`                                                    |
| return 구문 사용 | 블록{} 으로 코드를 감싼 경우 반환할 값이 있으면 반드시 return 문으로 반환해야함. 블록으로 감싼 코드에 return문이 없을 경우 "undefined" 가 반환됨. 블록을 생략할 경우 "return" 또한 생략 가능 |
