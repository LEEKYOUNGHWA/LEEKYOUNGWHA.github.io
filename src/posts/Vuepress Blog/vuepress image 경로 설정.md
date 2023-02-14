


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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NTYxNTk5MzZdfQ==
-->