<template>
  <div class="gist">
    <template v-if="gistErr">
      <img 
        id="notFound" 
        height="100%"
        width="100%"
        src="https://user-images.githubusercontent.com/883233/102043641-d4817580-3d89-11eb-885d-2786373932d4.png" 
        alt="404">
    </template>
    <template v-else>
      <p v-html="gistDiv"></p>
    </template>
  </div>
</template>
<script>
import { jsonp } from 'vue-jsonp'

export default {
  data() {
    return {
      gistDiv: "loading...",
      gistErr: false,
    }
  },
  props: [
    'gistId',
    'file',
  ],
  computed : {
    url() {
      return "https://gist.github.com/" + this.gistId + ".json";
    },
    params() {
      return this.file?.length > 0 ? "?file=" + this.file :"";
    },
  },
  mounted : async function() {
    try {
      const result = await jsonp(this.url + this.params, { timeout: 20000 });
      this.gistDiv = result.div;
    } catch(e) {
      this.gistErr = true;
      console.log(e);
    }
  }
};
</script>
<style scoped>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
<style lang="stylus">
.gist
  td, tr
    background-color white
    border-color white
  .markdown-body pre
    background-color black;
</style>