---
title: Window Linux port kill
lang: ko-KR
date: 2024/11/05 11:54:00
lastUpdated: 2024/11/05 11:54:00
subTitle: Window Linux 포트 죽이기
meta:
  - name: Window Linux port kill
    content: Window Linux port kill
tags: ["cmd"]    
---

# Window Linux port kill
3번이상 검색한거 같다.. 바보
## Window
```sh
netstat -a -o | findstr 포트번호
taskkill /f /pid <PID>
```

## Linux
```sh
fuser -k <포트 번호>/tcp
```