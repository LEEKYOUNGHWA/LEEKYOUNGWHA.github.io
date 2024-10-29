---
lastUpdated: 2024/10/29 12:02:00
description: 52g
image: https://docs.flutter.dev/assets/images/branding/flutter/logo+text/horizontal/default.svg
---

# Flutter

[[toc]]

## 설치

1. flutter 설치
```sh
choco install Flutter # window: 초코라티 알아서 설치
flutter # 설치확인
```
2. Vscode 확장프로그램 설치 - Flutter
3. Android Studio 설치 [링크](https://developer.android.com/studio)  
4. Android Studio 실행해서 sdk 다운
5. 오류 발생시...  
```
Intel® HAXM installation failed. To install Intel® HAXM follow the instructions found at: 
https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows
```
- Windows 기능 켜기/끄기 -> Hyper - V, Windows 하이퍼바이저 플랫폼, 가상 머신 플랫폼 활성화
4. vscode >Flutter: Run Flutter Doctor
5. Flutter Doctor : `Error: Unable to find git in your PATH.` 오류 발생시 관리자모드 powershell
```sh
git config --global --add safe.directory '*'
```
6. Flutter Doctor : `cmdline-tools component is missing` 오류 발생시
- Android studio -> Settings -> Languages & Frameworks -> Android SDK -> SDK Tools -> Android SDK Command-line Tools 체크한 후 apply
7. Flutter Doctor : `Some Android licenses not accepted. To resolve this, run: flutter doctor --android-licenses` 오류 발생시
```
flutter doctor --android-licenses
```