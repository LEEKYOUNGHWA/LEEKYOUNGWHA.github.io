<template>
  <div ref="comment2"></div>
</template>
<script>
export default {
  mounted() {
    // script tag 생성
    const utterances = document.createElement("script");
    utterances.type = "text/javascript";
    utterances.async = true;
    utterances.crossorigin = "anonymous";
    utterances.src = "https://gist.github.com/LEEKYOUNGHWA/cefa54ca565ccf0b4ad33adf8ab4a0d8.js";

    // utterances.setAttribute("issue-term", "url"); // pathname|url|title|og:title 중 택 1
    // utterances.setAttribute("theme", "github-light"); // theme 설정 (github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light) 중 하나 선택
    // utterances.setAttribute("repo", "LEEKYOUNGHWA/blog-comment"); // 주의!! 사용할 repository

    this.$refs.comment2.appendChild(utterances);
  }
};
</script>