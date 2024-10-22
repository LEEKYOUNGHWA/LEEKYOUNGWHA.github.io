---
lastUpdated: 2024/10/22 16:51:00
description: 52g
image: https://dart-ko.dev/assets/img/logo_lockup_dart_horizontal.png
---

# Dart

- [https://dartpad.dev/](https://dartpad.dev/)
- [https://dart.dev/guides](https://dart.dev/guides)
- [Dart 언어 4시간만에 완전정복](https://www.inflearn.com/course/dart-%EC%96%B8%EC%96%B4-%EC%9E%85%EB%AC%B8?attributionToken=iQHwiAoMCKqex7gGEOq_ibsBEAEaJDY3MTI5YzY2LTAwMDAtMmRlZC04YmJkLTU4MjQyOWQzM2NmNCoHMTQ4OTQ0MDIwtbeMLaOAlyKo5aotnNa3LY6-nRXFy_MXwvCeFdSynRWOkckwn9a3LZD3sjCa7sYwOg5kZWZhdWx0X3NlYXJjaEgBaAF6AnNp)

## 1. 기본

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

## 2-1. 객체지향프로그래밍

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
  
  Idol blackPink3 = Idol('블랙핑크', ['지수', '제니', '리사', '로제']);
  print(blackPink3.firstMember); // 지수
  blackPink3.firstMember = '경화';
  print(blackPink3.firstMember); // 경화
  
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

 // 좀더 복잡한 로직이 있으면 함수사용
  String getFirstMember(){ 
    return this.members[0];
  }
  
  //getter
  String get firstMember {
    return this.members[0];
  }
  
  //setter
  set firstMember(String name){ // 무조건 하나의 파라미터만 가능
    this.members[0] = name;
  }
}
```
- private : _를 붙인다. 같은 파일 내에서만 사용 가능.

## 2-2. 상속

```Dart
// 상속(inheritance) : 상속을 받으면 부모 클래스의 모든 속성을 자식 클래스가 부여받는다
void main() {
  
  BoyGroup bts = BoyGroup('BTS', 2);
  bts.sayName();
  bts.sayMale();

  GirlGroup redVelvet = GirlGroup('Red Velvet', 5);
  redVelvet.sayMembersCount();
  redVelvet.sayFemale();
  
  print(bts is Idol);
  print(bts is BoyGroup);
  print(bts is GirlGroup);
  
}

class Idol {
  String name;
  int membersCount;

  Idol({
    required this.name,
    required this.membersCount,
  });

  void sayName() {
    print('저는 ${this.name}입니다');
  }

  void sayMembersCount() {
    print('${this.name}은 ${this.membersCount}명의 멤버가 있습니다.');
  }
}

class BoyGroup extends Idol {
  BoyGroup(
    String name,
    int membersCount,
  ) : super(
          name: name,
          membersCount: membersCount,
        );

  void sayMale() {
    print('저는 남자 아이돌 입니다');
  }
}

class GirlGroup extends Idol {
  GirlGroup(
    String name,
    int membersCount,
  ) : super(
          name: name,
          membersCount: membersCount,
        );

  void sayFemale() {
    print('저는 여자 아이돌 입니다');
  }
}
```

## 2-3. 메소드 오버라이딩
```Dart
// method : function(class 내부에 있는 함수)
// override : 덮어쓰다(우선시하다)

void main(){
  TimesTwo tt = TimesTwo(2);
  print(tt.calculate());
  
  TimesFour tf = TimesFour(4);
  print(tf.calculate());
}

class TimesTwo{
  final int number;
  
  TimesTwo(this.number);
  
  //method
  int calculate(){
    return number*2;
  }
}

class TimesFour extends TimesTwo {
  TimesFour(
    int number,
  ) : super(number);
  
  @override // 적어주자!
  int calculate() {
    //return super.number * 4; // this.number 동일, this 삭제 가능
    return super.calculate() * 2; // this.calculate 은 무한루프
  }
}
```
## 2-4. static

```Dart
void main() {
  Employee seulgi = Employee('슬기');
  Employee chorong = Employee('초롱');

  seulgi.name = '경화';
  seulgi.printNamesAndBuilding(); //제 이름은 경화입니다. null 건물에서 근무하고 있습니다
  chorong.printNamesAndBuilding(); //제 이름은 초롱입니다. null 건물에서 근무하고 있습니다

  Employee.building = '오투타워'; // static은 클래스에 귀속된다!
  seulgi.printNamesAndBuilding(); //제 이름은 경화입니다. 오투타워 건물에서 근무하고 있습니다
  chorong.printNamesAndBuilding(); //제 이름은 초롱입니다. 오투타워 건물에서 근무하고 있습니다

  Employee.printBuilding(); //저는 오투타워 건물에서 근무하고 있습니다
}

class Employee {
  static String? building; // null값 허용 스트링
  String name;

  Employee(
    this.name,
  );

  void printNamesAndBuilding() {
    print('제 이름은 $name입니다. $building 건물에서 근무하고 있습니다');
  }

  static void printBuilding() {
    print('저는 $building 건물에서 근무하고 있습니다');
  }
}
```

## 2-5. 인터페이스
```Dart
void main() {
  BoyGroup bts = BoyGroup('BTS');
  GirlGroup redVelvet = GirlGroup('레드벨벳');
  
  bts.sayName();
  redVelvet.sayName();
  
  print(bts is IdolInterface); // true
  print(bts is BoyGroup); // true
  print(bts is GirlGroup); // false
}

// 다트언어에서는 interface라고 명시하지 않음.
// class IdolInterface {
//   String name;
//   IdolInterface(this.name);
//   void sayName() {}
// }

// 인스턴스화 하지 못하게 abstract 키워드를 붙임
abstract class IdolInterface {
  String name;
  IdolInterface(this.name);
  void sayName(); // {} 지우기 가능. 어떤 형태인지만 명시
}

class BoyGroup implements IdolInterface {
  String name;
  BoyGroup(this.name);
  void sayName() {
    print('제 이름은 $name 입니다');
  }
}

class GirlGroup implements IdolInterface {
  String name;
  GirlGroup(this.name);
  void sayName() {
    print('제 이름은 $name 입니다');
  }
}

```

## 2-6. generic
타입을 외부에서 받을 때 사용
```Dart
void main() {
  Lecture<String> lecture1 = Lecture('123','lecture1');
  lecture1.printIdType();
  
  Lecture<int> lecture2 = Lecture(123,'lecture2');
  lecture2.printIdType();
}

class Lecture<T> {
  final T id;
  final String name;
  
  Lecture(this.id, this.name);
  
  void printIdType(){
    print(id.runtimeType);
  }
}
```
# Functional Programming

## 3-1. 형변환

```Dart
void main() {
  List<String> blackPink = ['로제','지수','리사','제니'];
  print(blackPink);
  print(blackPink.asMap());
  print(blackPink.toSet());
  
  Map blackPinkMap = blackPink.asMap();
  
  print(blackPinkMap.keys.toList());
  print(blackPinkMap.values.toList());
  
  Set blackPinkSet = Set.from(blackPink);
  
  print(blackPinkSet.toList());
}
```

## 3-2.