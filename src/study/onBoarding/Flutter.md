---
lastUpdated: 2024/11/28 16:55:00
description: 설치, 배포, 소스
image: https://docs.flutter.dev/assets/images/branding/flutter/logo+text/horizontal/default.svg
tags: ["flutter"]
---

# Flutter 설치, 배포

[[toc]]

## 설치

1. flutter 설치 
    ```sh
    choco install Flutter # window: 초코라티 알아서 설치
    flutter # 설치확인
    ```
1. Vscode 확장프로그램 설치 - Flutter, Error Lens 
1. Android Studio 설치 [링크](https://developer.android.com/studio)  
1. Android Studio 실행해서 sdk 다운   
1. 오류 발생시...  

        Intel® HAXM installation failed. To install Intel® HAXM follow the instructions found at: 
        https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows

    - Windows 기능 켜기/끄기 -> Hyper - V, Windows 하이퍼바이저 플랫폼, 가상 머신 플랫폼 활성화
1. vscode >Flutter: Run Flutter Doctor

1. Flutter Doctor : `Error: Unable to find git in your PATH.` 오류 발생시  
    - 관리자모드 powershell
    ```sh
    git config --global --add safe.directory '*'
    ```
1. Flutter Doctor : `cmdline-tools component is missing` 오류 발생시  
    - Android studio -> Settings -> Languages & Frameworks -> Android SDK -> SDK Tools -> Android SDK Command-line Tools 체크한 후 apply  

1. Flutter Doctor : `Some Android licenses not accepted. To resolve this, run: flutter doctor --android-licenses` 오류 발생시
    ```
    flutter doctor --android-licenses
    ```

1. Error: Unable to find suitable Visual Studio toolchain.
```sh
flutter config --android-studio-dir="C:\Program Files\Android\Android Studio"
```

1. vsCode 설정  
`Ctrl` + `shift` + `p` -> settings.json
    ```json
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "dart.previewFlutterUiGuides": true,
    ```

> 단축키
> - `ctrl`+`.` : Code Action 열기

## 배포

[김진한M 블로그 ㄱ](https://meotlog.tistory.com/73)  

마지막 쉘 스크립트 전까지 따라해 준다

나는 맥 환경이 아니므로.. 걍 손수 돌려줬다...(챗 지피티가 배포까지 해주면 얼마나 좋을까)
둘다 flutter 루트 경로에서 실행한다.

1. cmd 켜서 플러터 빌드..
```cmd
flutter build web --web-renderer html --dart-define=PROFILE=env
```
2. wsl 켜서 aws 명령어 실행
```sh
# aws s3 website s3://sherryflutter/ --index-document index.html --error-document error.html
# aws s3 sync ./build/web s3://sherryflutter/ # 차이가 있는 파일만 업로드하거나 삭제
aws s3 cp build/web/ s3://sherryflutter/ --recursive # 디렉토리 내부의 모든 파일과 하위 디렉토리까지 복사
aws cloudfront create-invalidation --distribution-id E1JH0EGOJGN6Q3 --paths '/*' # 캐시를 무효화
```

[todo 최종 구현](https://d36q53cigyqtai.cloudfront.net/)
- test 계정 : test@email.com / 1234

## Stateless Widgets

::: details Stateless Widgets
<Gist gistId="24c459e57f4fef09c522cc73ff398d75" file="StatelesWidgets.dart"/>
:::

- [dartPad](https://dartpad.dev/?id=24c459e57f4fef09c522cc73ff398d75)

## Stateful Widgets

::: details Stateful Widgets
<Gist gistId="e74b1c4b5246ecc28ce3e208f3ddd864" file="StatefulWidgets.dart"/>
:::

- [dartPad](https://dartpad.dev/?id=e74b1c4b5246ecc28ce3e208f3ddd864)

## Pomodoro App

::: details Pomodoro App
<Gist gistId="e5565f820a2ed3fd01a47fb32ba40271" file="PomodoroApp.dart"/>
:::

- [dartPad](https://dartpad.dev/?id=e5565f820a2ed3fd01a47fb32ba40271)

## Todo App

::: details Todo App
<Gist gistId="ddd5edb6e9bd94f0fbf9b1d3bccfae0b" file="main.dart"/>
:::

- [dartPad](https://dartpad.dev/?id=ddd5edb6e9bd94f0fbf9b1d3bccfae0b)