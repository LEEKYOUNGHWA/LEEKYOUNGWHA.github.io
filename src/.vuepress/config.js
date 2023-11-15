const { description } = require('../../package')
const fs = require("fs")
const path = require("path")

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '끄적끄적',
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
    ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8111136017997298', crossorigin: 'anonymous'}],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    sidebar: {
      '/': getSideBar()
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    'flowchart',
    'vuepress-plugin-mermaidjs',
    ['sitemap', { hostname: 'https://leekyounghwa.github.io'}],
  ],

  configureWebpack: {
    resolve: {
      alias: {
        '@image': '/src/image/'
      }
    }
  },

  markdown : {
    lineNumbers: true
  }
};

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
  console.log(fileList);
  return fileList;
}
