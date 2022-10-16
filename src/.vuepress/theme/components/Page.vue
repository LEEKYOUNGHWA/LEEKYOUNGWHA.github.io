<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <Comment class="theme-default-content" ref="comm"/>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Comment from '@theme/components/Comment.vue'

export default {
  components: { PageEdit, PageNav, Comment },
  props: ['sidebarItems'],
  updated() {
    this.$nextTick(() => {
      console.log("updated");
      this.$refs.comm.forceUpdate();
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
