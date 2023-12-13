---
title: 블로그 세팅 가이드
lang: ko-KR
date: 2023/11/10 00:00:00
lastUpdated: 2023/11/10 00:00:0
description: 초 스피드로 뷰프레스 블로그 세팅하기.
meta:
  - name: vuepress setting guide
    content: easiest fatest way to setting vuepress blog using chocolatey, vsCode
  - name: vuepress1
    content: setting vuepress blog in 10 minutes
tags: ["vuepress"]
---

# {{ $frontmatter.title }}

역시나 배보다 배꼽이 더 큰 블로그다.  
프로젝트 끝나서 할게 없어서 회사 피씨에 블로그를 세팅하려고 하는데...

귀찮다... 귀찮음 + 기억이 가물가물 + git 사용하면 감시당할꺼같음....  
뭐 조만간 포맷하고 철수할거 같으니... 그 사이에 잡혀가진 않겠지

암튼 희미한 기억을 붙잡고 다시 세팅하는 과정을 남겨놓는다.  
(이번 프로젝트에서 node 개발을 안해서 설치할게 많타 퓨.... 다음번에는 일말의 버벅임도 없이 한큐에 세팅하리라)

> 이 조합은 개인적인 선호에 따라 조합된것임. 구리다고 뭐라 하지 않기

1. vscode 설치 -- 귀찮다
2. git 설치 (cmd)
   `winget install --id Git.Git -e --source winget`
3.

```
git config --global user.name "leekyounghwa"
git config --global user.email "rudghk5220@gmail.com"
```

귀찮으니까 글로벌로 대충 때리자.  
4. chocolatey 설치
관리자 권한 powershell 에서 명령어 입력

```
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

5. ~~node 설치 `choco install nodejs-lts`~~ (이렇게 하지말고 nvm 부터 설치해야함)
   - choco install nvm
   - nvm install 16
   - nvm use 16.20.2
6. node 시스템 환경변수 설정 Path에 `C:\Program Files\nodejs` 추가, vscode 껏다 키기
7. vscode 확장프로그램 Git Graph 설치.  
   딴거 다 귀찮고 헷갈리기만 한다 이거 하나만 씀.
8. 내 블로그 클론 `https://github.com/LEEKYOUNGHWA/LEEKYOUNGHWA.github.io.git`
9. 모듈 설치 `npm i`
10. 드디어... !!! 명령어 치기 `npm run dev`
11. 끄읏

인줄 알았지..? mermaid 적용하고

`npm run build` 빌드 하였으나 오류를 뿜는다

```
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:68:19)
    at Object.createHash (node:crypto:138:10)
    at C:\Blog\LEEKYOUNGHWA.github.io\node_modules\terser-webpack-plugin\dist\index.js:217:37
    at Array.forEach (<anonymous>)
```

퓨.. 첨에는 teser-webpack-plugin 버전 업그레이드 해줬더니 다른데서 또 에러 뿜뿜 하는것이다.

webpack 을 4를 써서 그렇다는 사람도 있고 5를 써서 다운그레이드 해라는 사람도 있고... 제각각이다
결국 nvm 설치하고 node 버전을 16으로 다시 설치해줬다.  
(전에도 이랬었던거 같다 간만에 설치하니 똑같은 난관에 부딪힘 데자뷰...)

해결방안 : node 16으로 다운그레이드
[링크(무려 추천을 2370개나 받았다 ㄷㄷ)](https://stackoverflow.com/a/69699772/10222566)

node 깔끔하게 지워주고, `choco install nvm` 으로 [nvm 설치](https://velog.io/@sudev/nvm-%EC%84%A4%EC%B9%98-for-Windows-Node.js-%EC%A0%9C%EA%B1%B0)

[nvm 환경변수 편집](https://developerchaser.tistory.com/11)해준다

```
nvm install 16
nvm use 16.20.2
```

다시 빌드하니 정상적으로 동작한다 ... 결론 : lts 사용하려는 똥고집을 버리자.

++ vuepress 2로 업그레이드 할까 심히 고민이 된다.  
머메이드 검색하다가 본 테마인데  
[vuepress Theme Hope](https://theme-hope.vuejs.press/)
이쁘고 기능 지원도 많이 되고...  
근데 또 이런거 테마 쓰면 또 뭔가 덕지덕지 지저분해서 순정으로 갈아타고 싶고...  
회사에서 당분간 계속 할거 없으면 한번 시도해 봐야겠....  
아니다 그사이에 게시글을 더 쓰는게 맞나?  
고민해보겠음.
