---
title: posts
lang: ko-KR
date: 2023/12/22 10:00:00
heroText: study
description: cs books, online courses
home: true
---

<template v-for="page in posts">
  <h4>{{page.frontmatter.lastUpdated}}</h4>
  <h2><router-link :to="{ path: page.path}">{{page.title}}</router-link></h2>
</template>

<script>
export default {
  computed: {
    posts() {
      let posts = []
      for (let page of this.$site.pages) {
        if ( page.relativePath.startsWith("study")) {
          posts.push(page)
        }
      }
      posts = posts.sort((a,b)=> new Date(b.frontmatter.lastUpdated) - new Date(a.frontmatter.lastUpdated))
      return posts
    }
  },
}
</script>
