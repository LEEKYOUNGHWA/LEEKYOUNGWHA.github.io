# 파이썬 스터디


- 교재 : [파이썬 코딩도장](https://dojang.io/course/view.php?id=7)
- 교재 소스 파일 : [링크](https://github.com/namjaeyoon/python.dojang)
- 환경 : 개인적 선호에 따라 anaconda23.3.1 사용 python3.10.9

[[toc]]
## **day1** (2023-12-04)
### 환경변수 설정 : 시스템 환경변수 Path 에 추가
or `conda prompt` 사용
```
C:\ProgramData\anaconda3
C:\ProgramData\anaconda3\Scripts
C:\ProgramData\anaconda3\Library
```
### 버전확인 `conda -V` `conda --version` `python -V` `python --version`
### python idle 실행 : conda prompt에 idle 입력
```python 
# Hello, world 출력: idle 에 입력
print('Hello, world!')
Hello, world!
```
### 파일 저장해서 실행  
    (1) idle: File>New File  
    (2) idle: File>Save hello.py `print('Hello, world!')`  
    (3) idle: Run>Run Module
### 명령 프롬프트에서 파이썬 사용하기  `cmd`
```sh
C:\Users\HWA>python
Python 3.10.9 | packaged by Anaconda, Inc. | (main, Mar  1 2023, 18:18:15) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> print('Hello, world!')
Hello, world!
>>> exit()
```
### 명령 프롬프트에서 스크립트 파일 실행하기
```sh
C:\Users\HWA>cd C:\study\python
C:\study\python>python hello.py
Hello, world
```
### 세미콜론  
파이썬은 세미콜론을 붙이지 않음. 보통 한 줄에 여러 구문을 사용할 때 세미콜론으로 구분해준다.
```python
print('Hello'); print('1234')
```
### 한 줄 주석
```py
# Hello, world! 출력
print('Hello, world!')
a = 1 + 2 # 더하기
print('Hello, world!') #printf('1234567890')
```
### 블록 주석
각 줄마다 맨 앞에 #을 넣어준다. 보통 블록 주석을 작성할 때는 코드를 읽기 쉽도록 # 뒤에 공백을 한 칸 띄움.
```py
# 더하기
# a = 1 + 2
# print('Hello, world!')
```
### 들여쓰기 : 공백(스페이스) 2칸, **공백 4칸**, 탭(tab) 
> 파이썬 코딩 스타일 가이드(PEP 8)에서는 공백 4칸으로 규정하고 있습니다. 따라서 공백 4칸을 사용하는 것이 좋습니다
```py
if a == 10:
     print('10입니다.')
```
- 코드블록 : 특정한 동작을 위해서 코드가 모여 있는 상태. 파이썬은 들여쓰기를 기준으로 코드 블록을 구성.같은 블록은 들여쓰기 칸 수가 같아야 하고, 공백과 탭 문자를 섞어 쓰면 안됨.
```py
if a == 10:
      print('10')
      print('입니다.')
```
### 정수계산
```python
1 + 1 #덧셈
```
    2
```python
1 - 2 #뺄셈
```
    -1
```python
2 * 2 #곱셈
```
    4
```python
5 / 2 #나눗셈
```
    2.5
> ### 파이썬 2와 파이썬 3의 차이점
> ***파이썬 2***에서 5 / 2는 2.5가 아닌 2가 나오는데, 정수끼리 나눗셈 결과는 ***정수***가 나오도록 정했기 때문.   
> ***파이썬 3는 정수끼리 나눗셈을 해도 나눗셈이 완전히 나누어 떨어져도 실수가 나옴***  
> ```
> 4 / 2 
> ```
> ```
> 2.0
> ```
```python
5 // 2 # 버림 나눗셈(floor division) : 나눗셈의 결과에서 소수점 이하는 버림
```
    2
```python
5.5 // 2 # 실수에 // 연산자를 사용하면 결과는 실수가 나오며 소수점 이하는 버림. 따라서 결과는 항상 .0으로 끝남
```
    2.0
```python
5 % 2 # 모듈로(modulo) 연산자 %: 나눗셈 후 나머지를 구하는 연산자
```
    1
```python
2 ** 10 # 거듭제곱을 구하는 ** 연산자 2 ** 10은 1024이고 2^10을 뜻함
```
    1024
```python
int(3.3) # int() : 정수(integer)를 뜻하며 값을 정수로 만들어 줌(소수점 이하는 버림)
```
    3
```python
int(5 / 2) # int(계산식)
```
    2
```python
int('10') #  int('문자열') : 문자열을 넣을땐 정수로 된 문자열을 넣어야 한다.
```
    10
```python
type(10) # 객체의 타입(자료형) 알아내기 : type(값) 
```    
    <class 'int'>

> ### type(10)  
> <class 'int'>  
> type은 말그대로 객체의 타입(자료형)을 알아내는 함수.  
> type에 괄호를 붙이고 10을 넣어보면 <class 'int'>라고 나오는데 정수(int) 클래스라는 뜻이다.  
> 파이썬에서는 숫자도 객체(object)이며, 객체는 클래스(class)로 표현함.  
> 앞에서 사용한 int(3.3)은 실수 3.3을 int 클래스로 된 객체로 만든다는 뜻이다.
```python
divmod(5, 2) # 몫과 나머지를 함께 구하기
```
    (2, 1)
> 값을 괄호로 묶은 형태를 튜플(tuple)이라고 하며 값 여러 개를 모아서 표현할 때 사용  
> 튜플은 변수 여러 개에 저장할 수 있는데 divmod의 결과가 튜플로 나오므로 몫과 나머지는 변수 두 개에 저장할 수 있음.
```python
quotient, remainder = divmod(5, 2)
print(quotient, remainder)
```    
    2 1
    
> ### 참고 | 2진수, 8진수, 16진수
> 
> - 2진수: 숫자 앞에 0b를 붙이며 0과 1을 사용합니다.
> - 8진수: 숫자 앞에 0o(숫자 0과 소문자 o)를 붙이며 0부터 7까지 사용합니다.
> - 16진수: 숫자 앞에 0x 또는 0X를 붙이며 0부터 9, A부터 F까지 사용합니다(소문자 a부터 f도 가능).

```py
0b110
```
    6
```python
0o10
```
    8
```python
0xF
```
    15

### 실수계산
```python
3.5 + 2.1
```
    5.6
```python
4.3 - 2.7
```
    1.5999999999999996
> 1.6이 나와야 하는데 1.5999999999999996이 나왔음.  
> 컴퓨터는 실수를 표현할 때 오차가 발생하기 때문.  
> 자세한 내용은 [부록 47.7 실수 값의 오차](https://dojang.io/mod/page/view.php?id=2466)를 참조.
```python
1.5 * 3.1
```

    4.65

```python
5.5 / 3.1
```

    1.7741935483870968

```python
4.2 + 5 # 실수와 정수를 함께 계산하면 표현 범위가 넓은 실수로 계산(실수가 정수보다 표현 범위가 넓다)
```

    9.2

```python
float(5) # float(숫자) : 숫자 또는 계산 결과를 강제로 실수로 float
```

    5.0

```python
float(1 + 2) # float(계산식)
```

    3.0

```python
float('5.3') # float('문자열') : 실수 또는 정수로 된 문자열이어야 함.
```

    5.3
> ### float
> 부동소수점(floating point)에서 따왔으며 값을 실수로 만들어줌.  
> 즉, 실수는 float 자료형이며 type에 실수를 넣어보면 <class 'float'>가 나옴.  
> type(3.5)  
> <class 'float'>

> ### 참고 | 복소수
> 실수부와 허수부로 이루어진 복소수(complex number)도 사용할 수 있다.  
> 허수부는 숫자 뒤에 j를 붙임  
> (수학에서는 허수를 i로 표현하지만 공학에서는 j를 사용)
```python
1.2+1.3j
```

    (1.2+1.3j)

```python
complex(1.2, 1.3) # 복소수로 만들 때는 complex를 사용
```
    (1.2+1.3j)



