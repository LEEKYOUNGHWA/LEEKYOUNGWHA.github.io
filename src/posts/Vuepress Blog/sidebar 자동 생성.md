
# vuepress 블로그 sidebar 자동 생성

vuepress는 다 괜찮은데 게시글을 하나 생성할때마다 설정 파일에 경로를 지정해 줘야 하는게 상당히 귀찮다. 

vuepress에서 기본으로 제공하는 `sidebar: 'auto'` 옵션은 는 한 페이지만 나오는 거였다 ㅠㅠ..  여러 블로그랑 npm package를 봤는데 전부 다 내가 원하는 모양새가 아니었다.  내가 원하는건 재 폴더 구조대로 그냥 1뎁스로 깔끔하게 펼쳐져서 노출 시키는 건데.. (stack edit에서도 편집하기 쉽게..)

[https://techformist.com/automatic-dynamic-sidebar-vuepress/](https://techformist.com/automatic-dynamic-sidebar-vuepress/)

위 블로그에서 마지막 솔루션으로 직접 개발하는것에 아이디어를 얻어사이드바에 내 폴더 구조대로 노출 시킬수 있게 변경해 보았다.

내 폴더 구조

![2](~@image/2.png)

기존 side bar 설정을 지우고 동적으로 읽을 수 있게 함수를 생성해 주었다.
```js
// src/.vuepress/config.js

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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNDg0NjMzNTgsMTk3NDUzNzk3NCwtMz
k5NzM1NTk4LC03ODg0MTI4MDQsLTEwODU3MDU5ODksOTA4Njg4
MTUsNzMwNDI2NTIzXX0=
-->