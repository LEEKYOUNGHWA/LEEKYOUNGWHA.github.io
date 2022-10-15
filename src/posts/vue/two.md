# vuepress 블로그

## sidebar 자동 생성

[https://techformist.com/automatic-dynamic-sidebar-vuepress/](https://techformist.com/automatic-dynamic-sidebar-vuepress/)

여러 블로그랑 npm package를 봤는데 내가 원하는 모양새는 아니었다.  
vuepress에서 기본으로 제공하는 `sidebar: 'auto'` 는 한 페이지만 나오는 거였다 ㅠㅠ  
여러 폴더를 자동으로 읽지 못함..  
위 블로그에서 마지막 솔루션으로 직접 개발하는것에 아이디어를 얻어서 약간 변경해보았다.

내 폴더 구조

![2](~@image/2.png)

```js
themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    sidebar: {
      '/': getSideBar()
    }
    /*
    sidebar: {
      '/': [
        { 
          title: 'spring',
          collapsable: false,
          children: [ 
            'posts/spring/one',
            'posts/spring/two' 
          ] 
        },
        { 
          title: 'tools',
          collapsable: false,
          children: [ 
            'posts/tools/one', 
            'posts/tools/two' 
          ] 
        },       
        { 
          title: 'vue',
          collapsable: false,
          children: [ 
            'posts/vue/one', 
            'posts/vue/two' 
          ] 
        } 
      ]
    */
```

```javascript
function getSideBar() {
  const src = './src/';
  const posts = 'posts'
  const fs = require('fs');
  const fileList = [];  
  fs.readdirSync(src+posts).forEach(file => {   
    const childrenList = [];
    fs.readdirSync(src+posts+'/'+file).forEach(fileName => {
      childrenList.push((posts+'/'+file+'/'+fileName).replace('.md',''))
    });
    fileList.push({'title' : file, 'collapsable' : false, 'children' : childrenList});
  }); 
  return fileList;
}
```
이제 마크다운 파일만 생성해주면 사이드바에 자동으로 추가된다!


## 이미지 경로 설정

[https://vuepress.vuejs.org/guide/assets.html#relative-urls](https://vuepress.vuejs.org/guide/assets.html#relative-urls)

```js
configureWebpack: {
    resolve: {
      alias: {
        '@image': '/src/image/'
      }
    }
  }
```
```
![2](~@image/2.png) /*markdown에서 사용할때는 이렇게*/
```

## SEO 검색최적화 sitemap 만들기

[https://www.npmjs.com/package/vuepress-plugin-sitemap](https://www.npmjs.com/package/vuepress-plugin-sitemap)
[https://kyounghwan01.github.io/blog/Vue/vuepress/seo/](https://kyounghwan01.github.io/blog/Vue/vuepress/seo/)

```bash
npm install vuepress-plugin-sitemap
```

`requires a peer of esm@^3.0.0 but none is installed` 메시지 떠서 추가로 설치해줬다

```bash
npm install "esm@^3.0.0"
```

```js
module.exports = {
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        ['sitemap', { hostname: 'https://leekyounghwa.github.io'}], /* 괄호 틀려서 한참 헤멨다 */
      ],
}
```
빌드하면 src/.vuepress/dist/sitemap.xml 파일이 생성된것을 확인할 수 있다.

`src/.vuepress/public/robots.txt 작성`
```
User-agent: *
Allow: /
Sitemap: https://leekyounghwa.github.io/sitemap.xml
```
[https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap?hl=ko#addsitemap](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap?hl=ko#addsitemap)
