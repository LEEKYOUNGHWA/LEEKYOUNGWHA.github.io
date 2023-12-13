---
title: todo app 실습
lang: ko-KR
date: 2023/12/12 10:00:00
lastUpdated: 2023/12/12 10:00:00
description: todo app 실습
meta:
  - name: todo app 실습
    content: chapter 10, chapter11
tags: ["React"]
---

# {{ $frontmatter.title }}

[[toc]]

## todo app

### 설치

```sh
yarn add node-sass classnames react-icons
```

### prettier 설정

`.prettierrc`

```
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}

```

### flex

- [display 속성 flex](http://flexboxfroggy.com/#ko)

### react-icons

- [react-icons](https://react-icons.github.io/react-icons/#/icons/md)

```js
import { 아이콘 이름 } from 'react-icons/md';
```

### 리액트 개발자 도구 설치

크롬 확장프로그램

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

### 성능측정

`크롬 개발자도구` -> `Performance 탭` -> `녹화 버튼` 누르고 ‘할 일 1’ 항목을 체크한 다음, 화면에 변화가 반영되면 `Stop` 버튼

### eslint 빠른수정

`ctrl` + `.`

## 프로덕션 모드에서 구동해 보고 싶다면?

```sh
yarn build
yarn global add serve
serve -s build
```

## react-virtualized

react-virtualized를 사용하면 리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지.  
스크롤되면 해당 스크롤 위치에서 보여 주어야 할 컴포넌트를 자연스럽게 렌더링

```sh
yarn add react-virtualized
```
