---
title: git 명령어 정리
lang: ko-KR
date: 2023/11/20 10:00:00
lastUpdated: 2023/11/20 10:00:00
description: git 명령어 정리
meta:
  - name: git 명령어 정리
    content: git 명령어 정리
tags: ["git"]
---
# {{ $frontmatter.title }}

```sh
// 로컬 브랜치 삭제
git branch -d <branchName>
// 원격 브랜치 삭제
git push origin -d <branchName>

// git repo 만들기
git init
// stage 에 파일 올리기
git add .
// 커밋
git commit -m "메세지"
// 로그보기
git log
// 로컬저장소와 원격 저장소 연결
git remote add origin https://<github repo 주소>
// 원격 저장소 조회
git remote -v
// 푸쉬
git push origin master
```
