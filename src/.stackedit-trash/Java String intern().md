# Java String intern()

[https://simple-ing.tistory.com/3](https://simple-ing.tistory.com/3)  
[https://www.javatpoint.com/java-string-intern](https://www.javatpoint.com/java-string-intern)

The  **Java String class**  **intern()**  method returns the interned string. It returns the canonical representation of string.

It can be used to return string from memory if it is created by a new keyword. It creates an exact copy of the heap string object in the String Constant Pool.

### Signature

The signature of the intern() method is given below:

```
public String intern()
```

### Returns

interned string

Play Video

## The need and working of the String.intern() Method

When a string is created in Java, it occupies memory in the heap. Also, we know that the String class is immutable. Therefore, whenever we create a string using the new keyword, new memory is allocated in the heap for corresponding string, which is irrespective of the content of the array. Consider the following code snippet.

```
  String str = new String("Welcome to JavaTpoint.");
  String str1 = new String("Welcome to JavaTpoint");
  System.out.println(str1 == str); // prints false
```

The println statement prints false because separate memory is allocated for each string literal. Thus, two new string objects are created in the memory i.e. str and str1. that holds different references.

We know that creating an object is a costly operation in Java. Therefore, to save time, Java developers came up with the concept of String Constant Pool (SCP). The SCP is an area inside the heap memory. It contains the unique strings. In order to put the strings in the string pool, one needs to call the  **intern()**  method. Before creating an object in the string pool, the JVM checks whether the string is already present in the pool or not. If the string is present, its reference is returned.

1.  String str = new String("Welcome to JavaTpoint").intern(); // statement - 1
2.  String str1 = new String("Welcome to JavaTpoint").intern(); // statement - 2
3.  System.out.println(str1 == str); // prints true

In the above code snippet, the intern() method is invoked on the String objects. Therefore, the memory is allocated in the SCP. For the second statement, no new string object is created as the content of str and str1 are the same. Therefore, the reference of the object created in the first statement is returned for str1. Thus, str and str1 both point to the same memory. Hence, the print statement prints true.

## Java String intern() Method Example

**FileName:**  InternExample.java

1.  public  class InternExample{
2.  public  static  void main(String args[]){
3.  String s1=new String("hello");
4.  String s2="hello";
5.  String s3=s1.intern();//returns string from pool, now it will be same as s2
6.  System.out.println(s1==s2);//false because reference variables are pointing to different instance
7.  System.out.println(s2==s3);//true because reference variables are pointing to same instance
8.  }}

[Test it Now](https://www.javatpoint.com/opr/test.jsp?filename=InternExample)

**Output:**

false
true

## Java String intern() Method Example 2

Let's see one more example to understand the string intern concept.

**FileName:**  InternExample2.java

1.  public  class InternExample2 {
2.  public  static  void main(String[] args) {
3.  String s1 = "Javatpoint";
4.  String s2 = s1.intern();
5.  String s3 = new String("Javatpoint");
6.  String s4 = s3.intern();
7.  System.out.println(s1==s2); // True
8.  System.out.println(s1==s3); // False
9.  System.out.println(s1==s4); // True
10.  System.out.println(s2==s3); // False
11.  System.out.println(s2==s4); // True
12.  System.out.println(s3==s4); // False
13.  }
14.  }

[Test it Now](https://www.javatpoint.com/opr/test.jsp?filename=InternExample2)

**Output:**

true
false
true
false
true
false

## Points to Remember

Following are some important points to remember regarding the intern() method:

1) A string literal always invokes the intern() method, whether one mention the intern() method along with the string literal or not. For example,

1.  String s = "d".intern();
2.  String p = "d"; // compiler treats it as String p = "d".intern();
3.  System.out.println(s == p); // prints true

2) Whenever we create a String object using the  **new**  keyword, two objects are created. For example,

1.  String str = new ("Hello World");

Here, one object is created in the heap memory outside of the SCP because of the usage of the new keyword. As we have got the string literal too ("Hello World"); therefore, one object is created inside the SCP, provided the literal "Hello World" is already not present in the SCP.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMxMzI1NDQ3XX0=
-->