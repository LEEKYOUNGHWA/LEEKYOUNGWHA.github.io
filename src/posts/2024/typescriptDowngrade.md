# typeScript downgrade

```cmd

=============

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <4.8.0

YOUR TYPESCRIPT VERSION: 4.9.5

Please only submit bug reports when using the officially supported version.

=============

```

```cmd
npm remove typescript
npm install typescript@~4.4.3 --save-dev
```

[타입스크립트 다운그레이드](https://zetawiki.com/wiki/TypeScript_%EB%8B%A4%EC%9A%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EB%93%9C)]


## tsc 실행 오류 발생시

[Powershell 파워쉘 실행정책 - Execution Policy](https://m.blog.naver.com/vanstraat/221732533202)

powershell 관리자 권한으로 실행

```cmd
Set-ExecutionPolicy -Scope CurrentUser

cmdlet Set-ExecutionPolicy(명령 파이프라인 위치 1)
다음 매개 변수에 대한 값을 제공하십시오.
ExecutionPolicy: RemoteSigned

실행 규칙 변경
실행 정책은 신뢰하지 않는 스크립트로부터 사용자를 보호합니다. 실행 정책을 변경하면 about_Execution_Policies 도움말
항목(https://go.microsoft.com/fwlink/?LinkID=135170)에 설명된 보안 위험에 노출될 수 있습니다. 실행 정책을
변경하시겠습니까?
[Y] 예(Y)  [A] 모두 예(A)  [N] 아니요(N)  [L] 모두 아니요(L)  [S] 일시 중단(S)  [?] 도움말 (기본값은 "N"): y
```

## 타입스크립트 버전 확인

```cmd
PS C:\HR\registration-ui> tsc -v
Version 5.3.3
```


# Error: node_modules/@types/lodash/common/object.d.ts:1026:46 - error TS1005: '?' expected.

[Got failed on version 4.17.6](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/69932)

![err](https://private-user-images.githubusercontent.com/49183072/344083096-77b540eb-9531-42fc-ba31-d361d4b8b773.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYwMzkyNjQsIm5iZiI6MTcyNjAzODk2NCwicGF0aCI6Ii80OTE4MzA3Mi8zNDQwODMwOTYtNzdiNTQwZWItOTUzMS00MmZjLWJhMzEtZDM2MWQ0YjhiNzczLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTExVDA3MTYwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYzMzYyZjAyNjFkY2RiNTc5NTYzZTg3Zjg1MjUzZDcwMTc3MTRiZjNlNGU0ODMwM2UwNTQwY2M5ZjM2MmJiMmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.3sLgIYpxbJ0yowENSslXFYti0xNHmdIcw_awk3koFcM)
[](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/69932)

```cmd
npm uninstall @types/lodash
npm install @types/lodash@4.17.5
```