<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <TagLinks class="theme-default-content"/>
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <Comment class="theme-default-content" :key="location"/>

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Comment from '@components/Comment.vue'
import TagLinks from '@components/TagLinks.vue'

export default {
  components: { PageEdit, PageNav, Comment, TagLinks },
  props: ['sidebarItems'],
  data () {
    return {
      location: ''
    }
  },
  updated() {
    this.$nextTick(() => {
      this.location = location.pathname;
    })
  },
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
