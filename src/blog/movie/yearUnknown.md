---
title: 년도미상
lastUpdated: 2024/10/28 10:13:00
description: Movie
image:
---

# 년도미상

[IMDb Top 250 Movies](https://www.imdb.com/chart/top/?ref_=nv_mv_250)  
[죽기 전에 꼭 봐야 할 영화 1001편](https://terms.naver.com/list.naver?cid=42619&categoryId=42619)

<template v-for="(movie, idx) in movies" >
    <div class="container" :id="movieId(movie.name)">
        <!-- <div class="blog-cover">
            <a :href="movie.link" target="_blank"><img class="movie-img" :src="movie.img"/></a>
        </div> -->
        <div class="blog-content">
            <!-- <h4>{{movie.date}}</h4> -->
            <h3>
                <a :href="`#${movieId(movie.name)}`"
                    class="header-anchor"
                    aria-hidden="true">#</a>
                {{idx+1}}. {{movie.name}}
            </h3>
            <p>{{movie.memo}}</p>
            <ul><div class="star" v-for="star in movie.star">⭐</div></ul>
        </div>
    </div>
</template>

<script>
import movieList from '@data/movieListYearUnknown.json'

export default {
    methods: {
        movieId(name) {
            return name.replaceAll(' ', '-');
        },
    },
    data() {
        return {
            movies: movieList.year,
        }
    }
}
</script>

<style scoped>
h3 {
    margin-top: 10px;
    margin-bottom: 0px;
}
h4 {
    margin-bottom: 0px;
}
ul {
    padding: 0px;
    margin: 0px;
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
.movie-img {
    cursor: pointer;
    /* width: 200px; */
    height:200px;
}
.blog-cover {
    flex: 1;
    /* width: 200px; */
    height:200px;
}
.blog-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.blog-content p {
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 0.8em;
}
.star {
    display: flex;
    width: 20px;
    float: left;
}
@media (max-width: 800px) {
    .container {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
    }
    .movie-img {
        /* width: 200px; */
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