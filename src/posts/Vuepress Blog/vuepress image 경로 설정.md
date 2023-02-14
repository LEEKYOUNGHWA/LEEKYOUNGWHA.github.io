# vuepress 이미지 경로 설정

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

markdown에서 사용할때는 이렇게
```javascript
![image](~@image/2.png) 
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMjAyNTYyNTBdfQ==
-->