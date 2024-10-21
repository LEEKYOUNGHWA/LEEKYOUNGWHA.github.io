---
lastUpdated: 2024/10/18 16:51:00
description: 52g
---

# Dart

- [https://dartpad.dev/](https://dartpad.dev/)
- [https://dart.dev/guides](https://dart.dev/guides)
- [Dart 언어 4시간만에 완전정복](https://www.inflearn.com/course/dart-%EC%96%B8%EC%96%B4-%EC%9E%85%EB%AC%B8?attributionToken=iQHwiAoMCKqex7gGEOq_ibsBEAEaJDY3MTI5YzY2LTAwMDAtMmRlZC04YmJkLTU4MjQyOWQzM2NmNCoHMTQ4OTQ0MDIwtbeMLaOAlyKo5aotnNa3LY6-nRXFy_MXwvCeFdSynRWOkckwn9a3LZD3sjCa7sYwOg5kZWZhdWx0X3NlYXJjaEgBaAF6AnNp)

## 2. 객체지향프로그래밍
```Dart
void main() {
//   Idol blackPink = Idol (
//     '블랙핑크',
//     ['지수','제니','리사','로제']
//   );

//   print(blackPink.name);
//   print(blackPink.members);

  Idol bts = Idol.formList([
    ['RM', '진', '슈가', '제이홉'],
    'BTS'
  ]);

  print(bts.name);
  print(bts.members);

  Idol blackPink = const Idol('블랙핑크', ['지수', '제니', '리사', '로제']);
  Idol blackPink2 = const Idol('블랙핑크', ['지수', '제니', '리사', '로제']);
  print(blackPink == blackPink2);
  // const 선언하면 true 같은 인스턴스
  // 아니면 false
}

class Idol {
  final String name;
  final List<String> members; // 클래스 변수 final 사용. 수정불가

//   Idol(String name, List<String> members)
//     :this. name = name,
//     this.members = members;

  // const 키워드 사용시
  const Idol(this.name, this.members);

  Idol.formList(List values)
      : this.members = values[0],
        this.name = values[1]; // named constructor

  void sayHello() {
    print('dkssudgktpdy ${this.name} 입니다.');
  }

  void introduce() {
    print('저희 멤버는 ${this.members} 입니다.');
  }
}
```

## 1. 기본기

```Dart
void main() {
  print('Hello World!');

  var name = '경화';
  print(name); // 경화
  print('${name} ${name.runtimeType}'); //경화 String

  dynamic name2 = '경화';
  print('${name2} ${name2.runtimeType}'); //경화 String
  name2 = 1;
  print('${name2} ${name2.runtimeType}'); //1 int

  // String name = null; //non-nullable
  String? name3 = null; //nullable
  print(name3);
  String? name4 = '경';
  print(name4!); // 현재 이 값은 null이 아니다 //경

  // 빌드 타임에 값을 몰라도 된다
  final String name5 = '경화';
  // final name5 = '경화' // 타입 생략 가능
  // name5 ='이경화' 불가

  // 빌드 타임에 값을 알고 있어야함
  const String name6 = '경';
  // final name6 = '경' // 타입 생략 가능
  // name5 = '경화'; // 불가

  DateTime now = DateTime.now(); // 이 코드가 실행이 되는 순간
  print(now); // 2024-10-18 15:55:47.430

  double? number = 4.0;
  number ??= 3.0; // null 이면 3.0으로 바꿔라
  print(number); // 4
  number = null;
  number ??= 3.0;
  print(number); //3

  int number1 = 1;
  print(number1 is int); // true
  print(number1 is! int); // false
  print(number1 is String); // false
  print(number1 is! String); // true

  /**List**/
  List<String> blackpink = ['제니', '지수', '로제', '리사'];
  List<int> numbers = [1, 2, 3, 4, 5];
  print(blackpink); //[제니, 지수, 로제, 리사]
  print(numbers); //[1, 2, 3, 4, 5]
  print(blackpink[0]); // 제니
  print(blackpink.length); //4
  blackpink.add('경화');
  print(blackpink); // [제니, 지수, 로제, 리사, 경화]
  blackpink.remove('경화');
  print(blackpink); //[제니, 지수, 로제, 리사]
  print(blackpink.indexOf('로제')); // 2

  /**Map**/
  Map<String, String> dictionary = {
    'Harry Potter': '해리포터',
    'Ron Weasley': '론위즐리'
  };
  print(dictionary); //{Harry Potter: 해리포터, Ron Weasley: 론위즐리}
  Map<String, bool> isHarryPotter = {'Harry Potter': true, 'Ironman': false};
  isHarryPotter.addAll({'Spiderman': false});
  print(isHarryPotter); //{Harry Potter: true, Ironman: false, Spiderman: false}
  print(isHarryPotter['Ironman']); // false
  isHarryPotter['Hulk'] = false;
  isHarryPotter['Hulk'] = true;
  print(
      isHarryPotter); //{Harry Potter: true, Ironman: false, Spiderman: false, Hulk: true}

  isHarryPotter.remove('Harry Potter');
  print(isHarryPotter); //{Ironman: false, Spiderman: false, Hulk: true}
  print(isHarryPotter.keys); //(Ironman, Spiderman, Hulk)
  print(isHarryPotter.values); //(false, false, true)

  /**Set**/
  final Set<String> names = {'aaa', 'bbb', 'ccc', 'bbb'};
  print(names); //{aaa, bbb, ccc} set은 중복 제거
  print(names.contains('bbb')); // true

  /**for**/
  List<int> numbers2 = [1, 2, 3, 4, 5, 6];
  for (int number in numbers2) {
    // in
    print(number);
  }

  /**enum**/
  Status status = Status.pending;
  if (status == Status.approved) {
    print('승인입니다');
  } else if (status == Status.pending) {
    print('대기입니다'); // 대기입니다 출력됨
  } else {
    print('거절입니다');
  }

  /**function**/
  int result = addNumbers(1, 2, 3);
  print(result); // 6
  addNumbers(10); // y,z 기본값 들어감
  
  addNumbersRequired(x:10, y:30, z:40);
  addNumbersRequired(x:10, z:40, y:90);
  addNumbersRequired(x:10, y:30);
  
  /**typedef**/
  Operation operation = add;
  int result2 = operation(10, 20, 30);
  print (result2); //60
  
  operation = substract;
  int result3 = operation(10, 20, 30);
  print(result3); //-40
  
  int result4 = calculate(30,40,50,add);
  print(result4); //120
  
  int result5 = calculate(30,40,50,substract);
  print(result5); //-60
}

enum Status {
  approved,
  pending,
  rejected,
}

// 세개의 숫자를 더하고 짝수인지 홀수인지 알려주는 함수
// optional parameter - 있어도 되고 없어도 되는 파라미터 [] 대괄호 사용
int addNumbers(int x, [int y = 10, int z = 20]) {
  print('addNumbers 실행');
  print('x : $x, y : $y, z: $z');

  int sum = x + y + z;
  if (sum % 2 == 0) {
    print('짝수입니다');
  } else {
    print('홀수입니다');
  }
  return sum;
}

// arrow function
int addNumbersArrow(int x, {
  required int y,
  int z = 30
}) => x + y + z;

//named parameter - 이름이 있는 파라미터 (순서가 중요하지 않다)
addNumbersRequired({
  required int x,
  required int y,
  int z = 30}) { // named parameter에서 optional parameter 사용 가능. required를 지우고 기본값 넣어준다.
  print('addNumbersRequired 실행');
  print('x : $x, y : $y, z: $z');

  int sum = x + y + z;
  if (sum % 2 == 0) {
    print('짝수입니다');
  } else {
    print('홀수입니다');
  }
}

typedef Operation = int Function(int x, int y, int z);

//더하기
int add(int x, int y, int z) => x + y + z;

//빼기
int substract(int x, int y, int z) => x - y - z;

// 계산
int calculate(int x, int y, int z, Operation operation){
  return operation(x, y, z);
}
```
