# vuepress 이미지 경로 설정

[https://vuepress.vuejs.org/guide/assets.html#relative-urls](https://vuepress.vuejs.org/guide/assets.html#relative-urls)

관리하는 방법은 
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
![image](~@image/image.png) 
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI5OTcwMzE1N119
-->