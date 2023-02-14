# vuepress utterance 댓글기능추가하기

[블로그](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-comment/) 참고 하였다.. 이분은 패키지를 새로 설치 하셨지만 그냥 vue press를 수정하면 안되나? 하는 생각에.. vuepress 직접 수정 했습니다

 1.  theme/components/Comment.vue 파일 생성
 
```js
<template>
  <div ref="comment"></div>
</template>
<script>
export default {
  mounted() {
    // script tag 생성
    const utterances = document.createElement("script");
    utterances.type = "text/javascript";
    utterances.async = true;
    utterances.crossorigin = "anonymous";
    utterances.src = "https://utteranc.es/client.js";

    utterances.setAttribute("issue-term", "pathname"); // pathname|url|title|og:title 중 택 1
    utterances.setAttribute("theme", "github-light"); // theme 설정 (github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light) 중 하나 선택
    utterances.setAttribute("repo", `LEEKYOUNGHWA/blog-comment`); // 주의!! 사용할 repository

    this.$refs.comment.appendChild(utterances);
  }
};
</script>
```

2. theme/components/Page.vue 수정

```js {6,18,21}
<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <Comment/>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Comment from '@theme/components/Comment.vue'

export default {
  components: { PageEdit, PageNav, Comment },
  props: ['sidebarItems']
}
</script>
```
theme/components/Page.vue 를 수정하면 된다고 생각 했으나.. 사이드바로 메뉴 이동시 댓글창이 바뀌지 않았다 ㅠ... 강제로 업데이트 하는 코드를 추가해 주었다.

Page.vue DOM 변경시 현재 url path를 키값으로 설정하여 Comment component update!!
 
[https://hyeonyeee.tistory.com/m/97](https://hyeonyeee.tistory.com/m/97)
[https://forum.vuejs.org/t/observing-dom-changes/28585](https://forum.vuejs.org/t/observing-dom-changes/28585)

```js
<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <Comment class="theme-default-content" :key="location"/>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Comment from '@theme/components/Comment.vue'

export default {
  components: { PageEdit, PageNav, Comment },
  props: ['sidebarItems'],
  data () {
    return {
      location: location.pathname
    }
  },
  updated() {
    this.$nextTick(() => {
      this.location = location.pathname;
    })
  },
}
</script>
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjUxMjM0NzddfQ==
-->