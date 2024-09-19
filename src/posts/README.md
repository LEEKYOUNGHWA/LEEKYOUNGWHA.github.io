---
title: posts
lang: ko-KR
date: 2023/12/22 10:00:00
heroText: TIL
description: what i've learned
home: true
---

<template v-for="page in posts">
  <h5>{{page.frontmatter.lastUpdated}}</h5>
  <h3><router-link :to="{ path: page.path}">{{page.title}}</router-link></h3>
</template>

<script>
export default {
  computed: {
    posts() {
      let posts = []
      for (let page of this.$site.pages) {
        if ( page.relativePath.startsWith("posts")) {
          posts.push(page)
        }
      }
      posts = posts.sort((a,b)=> new Date(b.frontmatter.lastUpdated) - new Date(a.frontmatter.lastUpdated))
      return posts
    }
  },
}
</script>
