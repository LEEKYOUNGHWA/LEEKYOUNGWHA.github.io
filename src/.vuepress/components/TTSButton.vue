<template>
    <button class="speak-button" @click="speakPageText()">텍스트 읽기</button>
</template>
    
<script>
    export default {
        methods: {
            speakPageText() {
                // alert("");
                // 페이지의 모든 텍스트를 가져오기
                const pageText = document.getElementsByClassName('theme-default-content content__default')[0].innerText;
                
                // TTS 기능 구현
                const speech = new SpeechSynthesisUtterance(pageText);
                window.speechSynthesis.speak(speech);
            },
        },
    }
</script>
    
<style>
    .speak-button {
    background-color: #007bff; /* 파란색 */
    color: white; /* 텍스트 색상 */
    padding: 10px 20px; /* 여백 */
    border-radius: 30px; /* 라운딩된 모서리 */
    border: none; /* 기본 테두리 제거 */
    font-size: 16px; /* 폰트 크기 */
    cursor: pointer; /* 마우스 커서 */
    transition: background-color 0.3s; /* 배경색 변화에 부드러운 전환 효과 */
    }
    .speak-button:hover {
    background-color: #0056b3; /* 마우스를 올렸을 때 어두운 파란색 */
    }
    .speak-button:focus {
    outline: none; /* 포커스 시 테두리 없애기 */
    }
</style>