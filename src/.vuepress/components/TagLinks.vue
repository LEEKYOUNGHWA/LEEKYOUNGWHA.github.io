<template lang="html">
  <div>
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/etc/tagList.html#${tag}`}">
      #{{tag}}
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>