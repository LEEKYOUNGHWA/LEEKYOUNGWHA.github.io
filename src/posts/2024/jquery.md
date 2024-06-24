---
title: jQuery
lang: ko-KR
date: 2024/04/30 09:36:00
lastUpdated: 2024/04/30 09:36:00
description: jQuery
meta:
  - name: eclipse 설정
    content: eclipse 설정
tags: ["tool"]
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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUxNDI5OTUyXX0=
-->