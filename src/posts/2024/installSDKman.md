---
title: window 에서 SDKman 설치
lang: ko-KR
date: 2024/01/26 14:05:00
lastUpdated: 2024/01/26 14:05:00
description: window 에서 SDKman 설치. choco 를 이용해서 설치. 설치후 제대로 동작하지 않을때
meta:
  - name: window 에서 SDKman 설치 choco
    content: window 에서 SDKman 설치 choco
---

# SDKman

## window 에서 SDKman 설치

구글에 window SDKman 설치를 검색하면 몇몇 국내 블로그가 뜨는데 대부분 설치하는 방법이 좀 불편(?) 하다.  
choco 를 이용해서 설치하는 해외 [블로그](https://walterteng.com/using-sdkman-on-windows) 발견했다. 참고해서 설치 해줬음

1. Install [Chocolatey](https://docs.chocolatey.org/en-us/choco/setup)
2. Install Git for Windows `choco install git`
   > 위 두개는 어지간하면 다 있지 않나 싶다
3. Install Zip `choco install Zip`
   > 블로그에 git 이라고 되어 있는데 오타인거 같다.  
   > 관리자용 powershell 에서 명령어 실행해서 설치해줬다.
4. Install SDKMAN in a custom project folder in C drive.

   git bash 에서 실행. 블로그랑 똑같이 디렉토리 설정해서 설치했다.

   ```sh
   export SDKMAN_DIR="/c/project/lib/sdkman" && curl -s "https://get.sdkman.io" | bash # 디렉토리 설정하여 설치
   curl -s "https://get.sdkman.io" | bash # 디렉토리 설정 없이 설치. user 폴더 안에 설치된다
   ```

5. 초기화 명령어를 실행시켜 준다

   git bash 에서 실행

   ```
   source "C:\project\lib\sdkman\bin\sdkman-init.sh"
   ```

6. 환경변수 설정...

   JAVA_HOME 을 `C:\project\lib\sdkman\candidates\java\current\` 로 설정해준다.

## JDK 설치 명령어

```sh
sdk list java # 사용 가능한 java 목록
sdk install <sdk> <version> # 특정 버전의 SDK 설치
sdk use <sdk> <version> # 특정 버전의 SDK 사용
sdk default <sdk> <version> # 특정 버전의 SDK를 기본으로 설정 새로운 터미널 세션에서도 해당 버전의 SDK가 자동으로 선택
sdk uninstall <sdk> <version> # 특정 버전의 SDK를 제거
```

## 설치후 제대로 동작하지 않을때

git bash 와 cmd 에서 java -version 실행해 버전 확인해 본다.  
버전이 제대로 바뀌지 않았다면 한번더 해줘야 할 작업이 있다.

[https://superuser.com/questions/237737/why-is-java-version-returning-a-different-version-to-the-one-defined-in-java-ho](https://superuser.com/questions/237737/why-is-java-version-returning-a-different-version-to-the-one-defined-in-java-ho)

cmd 에서 `where java`를 입력하면 정말 unexpected 했던 경로가 나온다. 과거 openjdk 설치하면서 자동으로 세팅된거 같다.

`C:\Program Files\Common Files\Oracle` `C:\Program Files (x86)\Common Files\Oracle` 안에 java 폴더를 지워준다.

그리고...
[https://blog.naver.com/siren258/220429528361](https://blog.naver.com/siren258/220429528361)  
이클립스 ini 파일 수정해주면 진짜로 끝
