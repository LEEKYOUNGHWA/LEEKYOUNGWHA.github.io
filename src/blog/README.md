---
sidebar: false
---

# Timeline
<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/kr/album/the-dark-side-of-the-moon-50th-anniversary-remastered/1665303755"></iframe>

<template v-for="album in albums">
    <div class="container" :id="albumId(album.artist, album.name)">
        <div class="blog-cover">
            <a :href="album.link"><img class="album-img-size" :src="album.img"></a>
        </div>
        <div class="blog-content">
            <h4>{{album.date}}</h4>
            <h3 >
                <router-link
                :to="{ path: `#${albumId(album.artist, album.name)}`}"
                class="header-anchor"
                aria-hidden="true">
                #
                </router-link>
                {{album.artist}} - {{album.name}}
            </h3>
            <!-- <p>{{album.memo}}</p> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        albumId(artist, name) {
            var id = artist + '-' + name;
            id = id.replaceAll(' ', '-');
            console.log(id);
            return id;
        }
    },
    data() {
        return {
            albums: [
                {
                    link:"https://music.apple.com/kr/album/the-dark-side-of-the-moon-50th-anniversary-remastered/1665303755",
                    img:"https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/52/81/66/528166f4-c219-03f9-7024-819477a0c7de/Jobc573c095-e338-410b-af87-e5f93d819c09-146534046-PreviewImage_preview_image_nonvideo_sdr-Time1678811876031.png/316x316bb.webp",
                    date:"2024.09.03",
                    artist: "Pink Floyd",
                    name: "The Dark Side of the Moon",
                    memo: "애플워치 잘못 눌린 김에 또 들음",
                },
                {
                    link:"https://music.apple.com/kr/album/the-diary-of-alicia-keys/255342344",
                    img:"https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/07/d6/64/07d66459-66ee-d3f7-22bf-79b61e9df037/Job85870431-061f-44ea-9284-b177ddc6be48-148891620-PreviewImage_preview_image_nonvideo_sdr-Time1681932734147.png/316x316bb.webp",
                    date:"2024.09.02",
                    artist: "Alicia Keys",
                    name: "The Diary Of Alicia Keys",
                    memo: "타이틀이 워낙 유명하지만 수록곡이 더좋음",
                },
                {
                    link:"https://music.apple.com/kr/album/timeless/1440984057",
                    img:"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/b8/8b/c3/b88bc3b9-6cf6-6630-5b3d-5b4c1ea67353/00602517026032.rgb.jpg/316x316bf.webp",
                    date:"2024.06.23",
                    artist: "Sergio Mendes",
                    name: "Timeless",
                    memo: "",
                },
                {
                    link:"https://music.apple.com/kr/album/music-is-my-life/1552831176",
                    img:"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f3/35/c3/f335c390-e382-7940-96d5-1ff2c68c79cf/divETC_20050610.jpg/316x316bb.webp",
                    date:"2024.06.23",
                    artist: "임정희",
                    name: "Music Is My Life",
                    memo: "",
                },
                {
                    link:"https://music.apple.com/kr/album/roller-coaster/1486514391",
                    img:"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/75/2a/93/752a9379-e4c3-7fdc-66ff-49a43c983953/Roller_Coaster.jpg/316x316bb.webp",
                    date:"2024.06.21",
                    artist: "롤러코스터",
                    name: "Roller Coaster",
                    memo: "",
                },
                {
                    link:"https://music.apple.com/kr/album/innervisions/1440806790",
                    img:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ff/c2/5f/ffc25f04-cb3b-b56e-dd28-8b77ae63e613/00602537070824.rgb.jpg/316x316bb.webp",
                    date:"2024.06.15",
                    artist: "Stevie Wonder",
                    name: "Innervisions",
                    memo: "",
                }
            ]
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
}
.album-img-size {
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
    .album-img-size {
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