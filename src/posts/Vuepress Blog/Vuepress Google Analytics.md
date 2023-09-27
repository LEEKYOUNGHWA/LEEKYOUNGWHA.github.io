# vuepress 블로그에 google analytics 붙이기

[https://kim-eun-ji.github.io/etc/2021-06-09-vuepress_ga/](https://kim-eun-ji.github.io/etc/2021-06-09-vuepress_ga/)

이 블로그 보고 따라 했다.
2번째 방법으로 적용 했다.

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
    [
	      "script",
	      {
	        async: true,
	        src: "https://www.googletagmanager.com/gtag/js?id=G-@@@@@@@@",
	      },
	    ],
	    ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-@@@@@@@@');"]],
	  ]
  ],
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA0Njc5NDM1NywtOTUxMDA2MTAyXX0=
-->