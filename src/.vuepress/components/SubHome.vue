<template>
  <div>
    <div class="subhome">
        <h1>{{ title }}</h1>
        <p>{{ desc }}</p>
        <!-- <vue-typed-js :strings="[desc]">
          <p class="typing description"></p>
        </vue-typed-js> -->
    </div>
    <template v-for="page in posts" >
      <div class="container">
        <router-link :to="{ path: page.path}" class="thumbnail-container">
          <img-lazy class="thumbnail" :src="altImg(page.frontmatter.image)" />
        </router-link>
        <div class="blog-content">
            <h5>lastUpdated: {{page.frontmatter.lastUpdated}}</h5>
            <h3><router-link :to="{ path: page.path}">{{page.title}}</router-link></h3>
            <p>{{page.frontmatter.description}}</p>
        </div>
      </div>
      <h2></h2>
    </template>
</div>
</template>

<script>

export default {
  data () {
      return {
          items: [
            'Ealing',
            'Kilmarnock',
            'Newport',
            'Kensington',
            '...', 
            'Dagenham',
            'Liverpool',
            'Saint Helens',
            'Knowsley'
          ]
      }
  },
  props: {
    nav : {
      default: "blog"
    },
    title : {
      default: "Blog"
    },
    desc : {
      default: "music, movie, series ect..."
    }
  },
  computed: {
    posts() {
      let posts = []
      for (let page of this.$site.pages) {
        if ( page.relativePath.startsWith(this.nav) && !page.relativePath.includes("README")) {
          posts.push(page)
        }
      }
      return posts.sort((a,b) => new Date(b.frontmatter.lastUpdated||'1999/10/04') - new Date(a.frontmatter.lastUpdated||'1999/10/04'))
    }
  },
  methods: {
    altImg(image) {
      return image || "/logo.jpg"
    }
  },
}
</script>

<style lang="stylus" scoped>
  h5, h3, h4, p {
    margin-top: 1px;
    margin-bottom: 10px;
  }
  h3, p {
    display: -webkit-box
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 0.8em;
  }
  .container {
    display: flex;
    scroll-margin-block-start: 70px;
  }
  .thumbnail-container{
    display: flex;
    object-fit: cover;
    cursor: pointer;
    width: 120px;
    height: 120px;
    float: left;
    margin-left: 30px;
    margin-right: 30px;
  }
  .thumbnail {
    max-height: 120px;
    vertical-align:middle;
    margin: auto;
    width: auto;
    height:auto;
  }
  .blog-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 200px;
    margin-top: 10px;
  }
  .subhome
    padding 0
    max-width $homePageWidth
    display block
    text-align left
    margin-left 20px
    margin-bottom 40px
    h1
      font-size 3rem
      margin-bottom 10px
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)

@media (max-width: $MQMobile)
  h5, h3, h4, p {
    margin-top: 5px;
    margin-bottom: 0px;
  }
  h3 
    a {
      font-size: 1.1rem;
    }
  p {
    font-size: 0.8rem;
  }
  .thumbnail-container{
    display: flex;
    object-fit: cover;
    cursor: pointer;
    width: 90px;
    height: 90px;
    float: left;
    margin-left: 10px;
    margin-right: 15px;
  }
  .thumbnail {
    width: auto;
    height:auto;
    max-height: 90px;
  }
  .subhome
    text-align center
    h1
      font-size 2rem
    .description
      margin-bottom 40px
      font-size 1.4rem
      line-height 1.3
  .container
    h3
      font-size 1.2rem
  .blog-content {
    margin-top: 0px;
    margin-left: 10px;
  }
</style>