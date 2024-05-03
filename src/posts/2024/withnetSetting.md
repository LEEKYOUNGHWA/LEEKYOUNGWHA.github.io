---
title: 2024 withnet 개발
lang: ko-KR
date: 2024/04/30 09:36:00
lastUpdated: 2024/04/30 09:36:00
description: jQuery
meta:
  - name: jQuery
    content: jQuery
tags: ["javascript"]
---

# jQuery

## 크롬 콘솔에서 jQuery 사용하는 방법

```js
var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict();
```

## 위땡땡에서 svn 씽크 공백 안맞을때

남들은 자동으로 공백을 없애는 기능을 찾아서 키지만 여기는 꺼줘야 한다...

Window -> Preferences 메뉴에서 General -> Editors -> AnyEdit Tools 를 선택

sts에서 기본으로 체크 되어 있는 **Remove trailing whitespage** 체크 해제해준다. 