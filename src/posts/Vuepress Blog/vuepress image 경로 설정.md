# vuepress 이미지 경로 설정

[https://vuepress.vuejs.org/guide/assets.html#relative-urls](https://vuepress.vuejs.org/guide/assets.html#relative-urls)

관리하는 방법은 여러가지가 있겠지만.. 난 최상단 폴더에서 image 폴더 생성하여 관리하고 있다.

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
eyJoaXN0b3J5IjpbMzk5MDc3NzYxXX0=
-->