# vuepress 블로그

## vue gtag
[https://yenarue.github.io/web/2020/04/29/vue-google-analytics/(https://yenarue.github.io/web/2020/04/29/vue-google-analytics/)





## 이미지 경로 설정

[https://vuepress.vuejs.org/guide/assets.html#relative-urls](https://vuepress.vuejs.org/guide/assets.html#relative-urls)

```js
configureWebpack: {
    resolve: {
      alias: {
        '@image': '/src/image/'
      }
    }
  }
```
```
![2](~@image/2.png) /*markdown에서 사용할때는 이렇게*/
```

## SEO 검색최적화 sitemap 만들기

[https://www.npmjs.com/package/vuepress-plugin-sitemap](https://www.npmjs.com/package/vuepress-plugin-sitemap)
[https://kyounghwan01.github.io/blog/Vue/vuepress/seo/](https://kyounghwan01.github.io/blog/Vue/vuepress/seo/)

```bash
npm install vuepress-plugin-sitemap
```

`requires a peer of esm@^3.0.0 but none is installed` 메시지 떠서 추가로 설치해줬다

```bash
npm install "esm@^3.0.0"
```

```js
module.exports = {
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        ['sitemap', { hostname: 'https://leekyounghwa.github.io'}], /* 괄호 틀려서 한참 헤멨다 */
      ],
}
```
빌드하면 src/.vuepress/dist/sitemap.xml 파일이 생성된것을 확인할 수 있다.

`src/.vuepress/public/robots.txt 작성`
```
User-agent: *
Allow: /
Sitemap: https://leekyounghwa.github.io/sitemap.xml
```
[https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap?hl=ko#addsitemap](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap?hl=ko#addsitemap)

[https://search.google.com/search-console](https://search.google.com/search-console)

![3](~@image/3.png)

## vuepress utterance 댓글기능추가하기

[https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-comment/](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-comment/)

`theme/components/Comment.vue 파일 생성`
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

`theme/components/Page.vue 수정`

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

`20221016 theme/components/Page.vue DOM 사이드바로 메뉴 이동시 댓글이 바뀌지 않았다 ㅠ 강제로 업데이트`

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
eyJoaXN0b3J5IjpbLTE0NjYwNzYzMzddfQ==
-->