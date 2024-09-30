<template>
  <main class="subhome">
    <header class="hero">
      <h1>blog</h1>
      <p class="description">music, movie, series ect...</p>
    </header>
  </main>
</template>

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
                 {{album.artist}} - {{album.name}}
            </h3>
            <p>{{album.memo}}</p>
        </div>
    </div>
</template>

<script>
import albumList from '@data/albumList.json'

export default {
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

<style lang="stylus" scoped>
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
  margin-top: 0px;
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
    width: 100px;
    height:100px;
    float: right;
    margin-right: 15px;
}
.blog-cover {
    flex: 1;
    width: 100px;
    height:100px;
}
.blog-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    .feature
      h2
        font-size 1.25rem
</style>