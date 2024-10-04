/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'
import VueTypedJs from 'vue-typed-js'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component(ImgLazy.name, ImgLazy)
  
  if (typeof process === 'undefined') { // process is undefined in a browser         
    Vue.use(VueTypedJs)
  }
}
