# vuepress 구글 검색되게 sitemap

## SEO 검색최적화 sitemap 만들기

[https://www.npmjs.com/package/vuepress-plugin-sitemap](https://www.npmjs.com/package/vuepress-plugin-sitemap)
[https://kyounghwan01.github.io/blog/Vue/vuepress/seo/](https://kyounghwan01.github.io/blog/Vue/vuepress/seo/)

우선 패키지 하나 설치해 준다
```bash
npm install vuepress-plugin-sitemap
```

` > requires a peer of esm@^3.0.0 but none is installed`

 에러 메시지 떠서 추가로 설치해줬다

```bash
npm install "esm@^3.0.0"
```

module.exports 에 추가해 준다. 괄호 틀려서 한참 헤멨다 ㅎㅎ

```js
module.exports = {
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        ['sitemap', { hostname: 'https://leekyounghwa.github.io'}], 
      ],
}
```

빌드하면 src/.vuepress/dist/sitemap.xml 파일이 생성된것을 확인할 수 있다.

>***src/.vuepress/public/robots.txt***  정상적으로 뜨는지 확인
```
User-agent: *
Allow: /
Sitemap: https://leekyounghwa.github.io/sitemap.xml
```
[https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap?hl=ko#addsitemap](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap?hl=ko#addsitemap)

[https://search.google.com/search-console](https://search.google.com/search-console)

![3](~@image/3.png)

설정 완료!

구글에 노출되기 까지 하루나 이틀 걸리는거 같다. 인내심을 가지고 기다리자.



<!--stackedit_data:
eyJoaXN0b3J5IjpbMTYwNzE3MDg4M119
-->