# vuepress 블로그에 google analytics 붙이기

[https://github.com/vuejs/vuepress/issues/2713](https://github.com/vuejs/vuepress/issues/2713)

[https://stackoverflow.com/questions/62563531/how-can-i-add-google-analytics-to-my-vuepress-website-in-accordance-with-gdpr](https://stackoverflow.com/questions/62563531/how-can-i-add-google-analytics-to-my-vuepress-website-in-accordance-with-gdpr)

밑에 있는 'script' 두줄 추가해줬다. 괄호와 콤마에 유의하자

`config.js`

```js 
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BLOG',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-672PNZBWWP'}],
    ['script', {}, ["window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-672PNZBWWP');"]],
  ],
```

F12 개발자도구 콘솔에서 아래와 같이 뜨면 성공
```
> gtag
< ƒ gtag(){dataLayer.push(arguments);}
```


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTAwNTg0MDMzOSwxOTQyODY1Mzg4LC0xOT
c3MzQxOTc2LDIwNDY3OTQzNTcsLTk1MTAwNjEwMl19
-->