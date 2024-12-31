<template>
    <div>
        <div class="movie-section">
            <img class="movie-img" :src="img" />
            <div class="blog-content">
                <h3> 
                    <a :href="`#${movieId(name)}`"
                        class="header-anchor"
                        aria-hidden="true">#</a>
                    {{ name }}
                </h3>
                <p> {{ memo }} </p>
            </div>
        </div>
        <div class="iframe-container">
            <iframe 
                :src="src"
                id="ytplayer" 
                type="text/html" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
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
        },
        src: {
            default: "https://www.youtube.com/embed/?listType=playlist&list=PLZc89k5FA5Gk9od-efYrKDyxt4gd9Q31O"
        }
    }
}
</script>

<style scoped>
/* 영화 섹션 스타일 */
.movie-section {
    display: flex;
    margin: 20px auto 40px auto;
    padding: 10px;
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

/* iframe 컨테이너 스타일 */
.iframe-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto 140px; /* 아래 여백을 40px로 설정 (원하는 값으로 수정 가능) */
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.iframe-container iframe,
.iframe-container object,
.iframe-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* 반응형 스타일 */
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
