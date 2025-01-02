<template>
    <div>
        <iframe 
            :src="jukeBox" 
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
            frameborder="0" 
            height="450" 
            style="width:100%;overflow:hidden;border-radius:10px;" 
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation">
        </iframe>
        <h4> albumlist {{albums.length}} </h4>
        <div v-for="(album, idx) in albums"> 
            <div class="container">
                <div class="wrap" @click="changeJukebox(album.link)">
                    <img-lazy class="album-img" :src="album.img"/>
                </div>
                <div class="blog-content">
                    <h4>{{album.date}}</h4>
                    <h3>
                        <a :href="`#${albumId(album.artist, album.name)}`"
                            class="header-anchor"
                            aria-hidden="true">#</a>
                        {{idx+1}}. {{album.artist}} - {{album.name}} <span v-if="album.year">({{album.year}})</span>
                        <a :href="album.link" target="_blank"><img class="apple-music-img" src="@image/2024/apple-music.png"></a>
                    </h3>
                    <p :style="{ whiteSpace: 'pre-line' }">{{album.memo}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { albumList } from '@data/albumList.js'

export default {
    props: {
        year: {
            type: String,
            required: true
        }
    },
    computed: {
        albums() {
            return albumList[this.year] || [];
        },
        jukeBox() {
            const firstAlbum = this.albums[0];
            return firstAlbum ? firstAlbum.link.replace('music', 'embed.music') : '';
        }
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
}
</script>

<style scoped>
h3 {
    margin-top: 10px;
    margin-bottom: 0;
}
p {
    margin: 10px 0 0 0;
    font-size: 0.85em;
}
h4 {
    margin-bottom: 0;
    margin-top: 10px;
}

.container {
    display: flex;
    margin-top: 20px;
    scroll-margin-block-start: 70px;
}
.apple-music-img {
    width: 20px;
    height: 20px;
}
.album-img {
    cursor: pointer;
    width: 200px;
    height: 200px;
}
.blog-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 50px;
}

@media (max-width: 800px) {
    p {
        font-size: 0.9em;
    }
    .container {
        flex-direction: column;
        margin-top: 40px;
    }
    .blog-content {
        margin: 20px;
    }
    .wrap {
        margin:auto;
    }
}
</style>