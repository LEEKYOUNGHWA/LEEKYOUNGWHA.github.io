---
title: alert() 이나 confirm() 자동 확인, 버튼 자동 클릭
lang: ko-KR
date: 2023/11/20 10:00:00
lastUpdated: 2023/11/20 10:00:00
description: alert() 이나 confirm() 자동 확인 && 버튼 자동 클릭
meta:
  - name: auto click alert ok
    content: auto confirm window.alert() or window.confirm
  - name: alert
    content: Javascript detect alert
  - name : javascript alert(), confirm() 자동 확인 누르기
    content : 기존 화면에서 alert(), confirm() 자동 확인 누르기
tags: ["javascript"]
---

# {{ $frontmatter.title }}

getSmart 라는 사내 교육프로그램이 있는데 다음 차시로 넘어갈때마다 확인 누르는게 너무 귀찮다.  
할짓 없어서 자동으로 넘어가게 스크립트를 짜봤다. (너무 간단하게 되버림..)  
다음 페이지로 넘어갈때 화면에서 발생하는 alert 이나 confirm 자동 확인, 재생버튼 버튼 자동 클릭 스크립트.  

- [detect-if-an-alert-or-confirm-is-displayed-on-a-page](https://stackoverflow.com/questions/4866986/detect-if-an-alert-or-confirm-is-displayed-on-a-page)  
- [how-to-make-google-chrome-javascript-console-persistent](https://stackoverflow.com/questions/5327955/how-to-make-google-chrome-javascript-console-persistent)

1. 차시 넘어갈때 페이지 리프레시 되므로 페이지 리프레시 되어도 콘솔 유지할 수 있도록 설정해준다  
`Developer Tools > Settings labelled "Console: Preserve log on navigation". 체크`

2. 콘솔에서 스크립트 실행
```js
// 다음으로 넘어가시겠습니까? confirm 없애기
(function() {
    var _old_confirm = window.confirm;
    window.confirm = function() {
        return true; // 자동 확인
        _old_confirm.apply(window,arguments);
    };
})();

// 인터벌로 재생버튼 자동 클릭
setInterval(function(){
  document.getElementsByClassName("vjs-big-play-button")[0].click();
},100);
```

3. 끄읏
