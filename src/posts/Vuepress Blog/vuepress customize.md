---
title: Vuepress customize
lang: ko-KR
date: 2023/11/15 20:46:25
description: customize sidebar, tags to my vuepress blog 
meta:
  - name: tags
    content: Adding Tags to vuepress
  - name: sidebar
    content: auto generate 1depth expanded sidebar vuepress blog
tags: ["vuepress"]
---
# {{ $frontmatter.title }}

## vuepress tag page 넣기 
- 참고 링크 
    - [Adding Tags to vuepress](https://code.roygreenfeld.com/cookbook/adding-tags-to-vuepress.html)
    - [vuePress tag 만들기](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-tag/#%E1%84%86%E1%85%A9%E1%86%A8%E1%84%91%E1%85%AD)

1. `.vuepress/components` 에 `TagLinks.vue` 만들어 준다.   
> 내 입맛에 맞게 약간 수정.   
> data() 는 에디터에서 빨간줄 뜨길래 걍 넣어줬음.  
> 난 그냥 최상단 마크다운에 태그 리스트 페이지 넣을거기 때문에 path도 수정해줬음.
```vue
<template lang="html">
  <div>
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/#${tag}`}">
      #{{tag}}
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
```

2. 참고한 블로그는 마크다운 글에 `<Taglinks />` 넣어줬지만 매번 넣기 귀찮으므로 걍 page 에 박아줬다
```vue {7,21,24}
-- .vuepress\components\page.vue
<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <TagLinks class="theme-default-content"/>
    <Comment class="theme-default-content" :key="location"/>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Comment from '@components/Comment.vue'
import TagLinks from '@components/TagLinks.vue'

export default {
  components: { PageEdit, PageNav, Comment, TagLinks },
```

이왕 하는김에 alias 추가
```js {6}
--config.js
configureWebpack: {
    resolve: {
      alias: {
        '@image': '/src/image/',
        '@components' : '/src/.vuepress/components/'
      }
    }
  },
```

3. 내 최상단 페이지에 넣을 태그리스트 컴포넌트 추가.  
   마찬가지로 path 수정해줬음
```vue
<template lang="html">
  <div>
    <span v-for="tag in Object.keys(tags)">
      <h2 :id="tag">
        <router-link
          :to="{ path: `#${tag}`}"
          class="header-anchor"
          aria-hidden="true">#</router-link>
        {{tag}}
      </h2>
      <ul>
        <li v-for="page in tags[tag]">
          <router-link
            :to="{ path: page.path}">{{page.title}}</router-link>
        </li>
      </ul>
    </span>
  </div>
</template>
```

4. 내 최상단 README.md 에 `<TagList />` 넣어줌.  
이제 블로그 최상단 메인 페이지에 깔끔하게 태그만 뜬다 짝짝짞

## vuepress 블로그 sidebar 자동 생성

vuepress는 다 괜찮은데 게시글을 하나 생성할때마다 설정 파일에 경로를 지정해 줘야 하는게 상당히 귀찮다. 

vuepress에서 기본으로 제공하는 `sidebar: 'auto'` 옵션은 는 한 페이지만 나오는 거였다 ㅠㅠ..  여러 블로그랑 npm package를 봤는데 전부 다 내가 원하는 모양새가 아니었다.  내가 원하는건 재 폴더 구조대로 그냥 1뎁스로 깔끔하게 펼쳐져서 노출 시키는 건데.. (stack edit에서도 편집하기 쉽게..)

[https://techformist.com/automatic-dynamic-sidebar-vuepress/](https://techformist.com/automatic-dynamic-sidebar-vuepress/)

위 블로그에서 마지막 솔루션으로 직접 개발하는것에 아이디어를 얻어사이드바에 내 폴더 구조대로 노출 시킬수 있게 변경해 보았다.

내 폴더 구조

![2](~@image/2.png)

기존 side bar 설정을 지우고 동적으로 읽을 수 있게 함수를 생성해 주었다.
```js
// src/.vuepress/config.js

themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    sidebar: {
      '/': getSideBar()
    }
    /*
    sidebar: {
      '/': [
        { 
          title: 'spring',
          collapsable: false,
          children: [ 
            'posts/spring/one',
            'posts/spring/two' 
          ] 
        },
        { 
          title: 'tools',
          collapsable: false,
          children: [ 
            'posts/tools/one', 
            'posts/tools/two' 
          ] 
        },       
        { 
          title: 'vue',
          collapsable: false,
          children: [ 
            'posts/vue/one', 
            'posts/vue/two' 
          ] 
        } 
      ]
    */

function getSideBar() {
  const src = './src/';
  const posts = 'posts'
  const fs = require('fs');
  const fileList = [];  
  fs.readdirSync(src+posts).forEach(file => {   
    const childrenList = [];
    fs.readdirSync(src+posts+'/'+file).forEach(fileName => {
      childrenList.push((posts+'/'+file+'/'+fileName).replace('.md',''))
    });
    fileList.push({'title' : file, 'collapsable' : false, 'children' : childrenList});
  }); 
  return fileList;
}
```
이제 마크다운 파일만 생성해주면 사이드바에 자동으로 추가된다!