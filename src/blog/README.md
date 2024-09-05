---
sidebar: false
---

# Album Timeline
#### jukebox        
<div style="padding:10px;"> </div>
<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" :src="jukeBox"></iframe>

#### playlist {{albums.length}}

<template v-for="(album, idx) in albums" >
    <div class="container" :id="albumId(album.artist, album.name)" :key="{idx}">
        <div class="blog-cover">
            <img @click="changeJukebox(album.link)" class="album-img" :src="album.img"/>
        </div>
        <div class="blog-content">
            <p>{{idx+1}}</p>
            <h4>{{album.date}}</h4>
            <h3>
                <a :href="`#${albumId(album.artist, album.name)}`"
                    class="header-anchor"
                    aria-hidden="true">#</a>
                {{album.artist}} - {{album.name}}
                <a :href="album.link" target="_blank"><img class="apple-music-img" src="./../image/2024/apple-music.png"></a>
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
        playerSrc() {
            return this.albums[0].link.replace('music', 'embed.music')
        }
    },
    data() {
        return {
            albums: albumList.album,
            jukeBox: albumList.album[0].link.replace('music', 'embed.music'),
        }
    }
}
</script>

<style scoped>
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
</style>