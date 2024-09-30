<template>
  <main class="subhome">
    <header class="hero">
      <h1>TIL</h1>
      <p class="description">Today I Learned</p>
    </header>
    <template v-for="page in posts">
      <h5>{{page.frontmatter.lastUpdated}}</h5>
      <h3><router-link :to="{ path: page.path}">{{page.title}}</router-link></h3>
    </template>
  </main>
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

<style lang="stylus" scoped>
.subhome
  padding 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)

@media (max-width: $MQMobileNarrow)
  .subhome
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
</style>
