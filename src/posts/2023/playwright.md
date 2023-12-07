---
title: playwright
lang: ko-KR
date: 2023/12/07 00:00:00
lastUpdated: 2023/12/07 00:00:00
description: playwright
meta:
  - name: playwright
    content: playwright
tags: ["python"]
---

# {{ $frontmatter.title }}

오늘 엄청 신기한걸 알게 되었음. playwright라고 2020년에 Microsoft에서 출시한 브라우저 테스트 및 웹 스크래핑을 위한 오픈 소스 자동화 라이브러리다. 브라우저 동작을 자동화 해줌... 신기하다....

[설치 공식문서](https://playwright.dev/python/docs/intro)

```sh
conda config --add channels conda-forge
conda config --add channels microsoft
conda install playwright
playwright install
```

> 처음에 pip으로 설치 해서 삭제하고 다시 conda로 깔아줬음  
> pip 으로 설치 하면 python -m playwright install

## codegen

- [codegen 링크](https://playwright.dev/python/docs/codegen)

playwright의 개쩌는점은 코드를 자동으로 써주는?? 녹화해주는 codegen 이라는 기능이 있다는것임.  
귀찮게 요소 하나하나 찾아서 소스를 안짜줘도 되는게 젤 좋은거 같다.  
녹화버튼 누르고 원하는 액션 하면 소스가 자동으로 생성됨.  
녹화한 소스 그대로 돌리면 자동화 완성이다.

```sh
playwright codegen demo.playwright.dev/todomvc
```

![image](~@image/16.jpg)
