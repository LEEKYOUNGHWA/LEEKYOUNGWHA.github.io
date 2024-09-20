<template>
  <main class="subhome">
    <header class="hero">
      <h1>blog</h1>
      <p class="description">music, movie, series ect...</p>
    </header>
  </main>
</template>

<div class="features">
  <div class="feature">
    <a href="/blog/music/2024">Music of the year →</a>
  </div>
  <div class="feature">
    <a href="/blog/movie/2024">Movie of the year →</a>
  </div>
  <div class="feature">
    <a href="/blog/series/2024">Series of the year →</a>
  </div>
</div>

## Album Timeline

#### jukebox    
    
<div style="padding:10px;"> </div>
<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" :src="jukeBox"></iframe>

#### albumlist {{albums.length}}

<template v-for="(album, idx) in albums" >
    <div class="container" :id="albumId(album.artist, album.name)">
        <div class="blog-cover">
            <img @click="changeJukebox(album.link)" class="album-img" :src="album.img"/>
        </div>
        <div class="blog-content">
            <h4>{{album.date}}</h4>
            <h3>
                <a :href="`#${albumId(album.artist, album.name)}`"
                    class="header-anchor"
                    aria-hidden="true">#</a>
                {{idx+1}}. {{album.artist}} - {{album.name}}
                <a :href="album.link" target="_blank"><img class="apple-music-img" src="../image/2024/apple-music.png"></a>
            </h3>
            <p>{{album.memo}}</p>
        </div>
    </div>
</template>

<script>
import albumList from '@data/albumList.json'

export default {
    async mounted() {
        window.global ||= window;
        const axios = require('axios').default
        const data = await axios.get('https://reqres.in/api/users');
        console.log(data);
    },
    methods: {
        albumId(artist, name) {
            var id = artist + '-' + name;
            id = id.replaceAll(' ', '-');
            return id;
        },
        changeJukebox(link) {
            this.jukeBox = link.replace('music', 'embed.music');
            location.href = '#jukebox';
        },
    },
    data() {
        return {
            albums: albumList.album,
            jukeBox: albumList.album[0].link.replace('music', 'embed.music'),
        }
    }
}
</script>

<style lang="stylus">
h3 {
    margin-top: 10px;
    margin-bottom: 0px;
}
p {
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 0.8em;
}
h4 {
    margin-bottom: 0px;
}
.container {
    display: flex;
    margin-top: 20px;
    scroll-margin-block-start: 70px;
}
.apple-music-img {
    width: 20px;
    height:20px;
}
.album-img {
    cursor: pointer;
    width: 200px;
    height:200px;
}
.blog-cover {
    flex: 1;
    width: 200px;
    height:200px;
}
.blog-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

@media (max-width: 800px) {
    .container {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
    }
    .album-img {
        width: 200px;
        height: 200px;
    }
    .blog-content {
        padding-left:10px;
        display: flex;
        flex-direction: column;
    }
    .blog-cover {
        margin: 0 auto;
    }
}

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
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
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
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>