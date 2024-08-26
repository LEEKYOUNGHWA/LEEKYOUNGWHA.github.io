---
title: embed gist to vuepress blog
lang: ko-KR
date: 2024/01/03 16:37:00
lastUpdated: 2024/01/03 16:37:00
description: 뷰프레스에 gist 넣기 how to embed gist to vuepress blog with vue-jsonp. inspired by https://github.com/sudhanshu-15/vue-embed-gist vue-embed-gist를 사용하려고 하였으나 빌드 에러가 났다. 소스 자체는 문제가 없는거 같은데... vuepress 에서 빌드할때 원리를 모르겠어서 정확한 이유는 모르겠음. (추측상 watch 에 jsonp를 달아놔서 그런거 같긴함...) 소스 자체는 복잡해보이지 않으므로 필요한 부분만 가져와서 간단하게 만들어 줬다.
meta:
  - name: vuepress gist
    content: how to embed gist to vuepress blog
  - name: 뷰프레스 블로그에 Gist 넣기
    content: vue-embed-gist를 활용하여 뷰프레스 블로그에 gist 사용하기
tags: ["vuepress"]
---

# {{ $frontmatter.title }}

뷰프레스에 gist 넣기.  
Embed gist to vuepress blog. inspired by [https://github.com/sudhanshu-15/vue-embed-gist](https://github.com/sudhanshu-15/vue-embed-gist)


vue-embed-gist를 설치해서 사용하려고 하였으나 빌드 에러가 났다. 소스 자체는 문제가 없는거 같은데... vuepress 에서 빌드할때 원리를 모르겠어서 정확한 이유는 모르겠음. (추측상 watch 에 jsonp를 달아놔서 그런거 같긴함...) 소스 자체는 복잡해보이지 않으므로 필요한 부분만 가져와서 간단하게 만들어 줬다.


## 1. install [vue-jsonp](https://www.npmjs.com/package/vue-jsonp)

```sh
npm i vue-jsonp
```

## 2. create a component `Gist.vue`

`src/.vuepress/components/Gist.vue`

<Gist gistId="860bae50029004d949dece769637be0d" file="Gist.vue"/>

## 3. use at .md file

```md
이것은 마크다운 입니다

<Gist gistId="860bae50029004d949dece769637be0d" file="Gist.vue"/>
```
