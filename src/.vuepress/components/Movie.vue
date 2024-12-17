<template>
    <div class="movie-section">
        <img class="movie-img" :src="img"/>
        <div class="blog-content">
            <h3> 
                <a :href="`#${movieId(name)}`"
                    class="header-anchor"
                    aria-hidden="true">#</a>
                {{name}} </h3>
            <p> {{memo}} </p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        movieId(name) {
            return name.replaceAll(' ', '-');
        },
    },
    props: {
        name: {
            default: "name"
        },
        memo: {
            default: "memo"
        },
        img: {
            default: "https://leekyounghwa.github.io/logo.jpg"
        }
    }
}
</script>

<style scoped>
.movie-section {
    display: flex;
    scroll-margin-block-start: 70px;
    display: flex;
    /* flex-direction: column; */
    margin: 20px auto;
    padding: 10px;
    background: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 800px;
}

.movie-img {
    cursor: pointer;
    margin-right: 40px;
    height: 200px;
    width: 150px;
    object-fit: cover;
}

.blog-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 10px;
    padding-right: 10px;
}

h3 {
    margin: 10px 0 0 0;
}

p {
    margin: 10px 0 0 0;
    font-size: 0.8em;
}

@media (max-width: 800px) {
    .movie-section {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center; /* 이미지와 내용을 가운데 정렬 */
    }
    .movie-img {
        margin-right: 0; /* 오른쪽 여백 제거 */
        height: 200px;
    }
    .blog-content {
        padding-left: 0; /* 왼쪽 패딩 제거 */
        flex-direction: column;
        align-items: center; /* 내용 가운데 정렬 */
        text-align: center; /* 텍스트 가운데 정렬 */
    }
}
</style>
