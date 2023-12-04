---
title: java exception
lang: ko-KR
date: 2023/12/01 10:00:00
lastUpdated: 2023/12/01 10:00:00
description: java exception
meta:
  - name: java exception
    content: java exception
tags: ["java"]
---

# java exception

[[toc]]

```mermaid
classDiagram
    Object <|-- Throwable
	Throwable <|-- Error
    Throwable <|-- Exception
	Exception <|-- SQLException
	Exception <|-- IOException
	Exception <|-- RuntimeException
	RuntimeException <|-- ArithmeticException
	RuntimeException <|-- IndexOutOfBoundsException
	RuntimeException <|-- IllegalArgumentException
	RuntimeException <|-- NullPointerException
	IndexOutOfBoundsException <|-- ArrayIndexOutOfBoundsException
	IllegalArgumentException <|-- NumberFormatException
	<<JavaClass>> Object
	<<JavaClass>> Throwable
	<<JavaClass>> Error
	<<JavaClass>> Exception
	<<JavaClass>> SQLException
	<<JavaClass>> IOException
	<<JavaClass>> RuntimeException
	<<JavaClass>> ArithmeticException
	<<JavaClass>> IndexOutOfBoundsException
	<<JavaClass>> IllegalArgumentException
	<<JavaClass>> NullPointerException
	<<JavaClass>> ArrayIndexOutOfBoundsException
	<<JavaClass>> NumberFormatException
```

![15](~@image/15.jpg)


|checked Exception|Unchecked Exception|
|--|--|
|반드시 예외를 처리해야함|명시적인 처리를 강제하지 않음|
|컴파일 단계|실행단계|
|예외발생시 트랜잭션 roll-back|roll-back 하지 않음|
|IoException, SQLException | NullPointerException, llegalArgumentException|


