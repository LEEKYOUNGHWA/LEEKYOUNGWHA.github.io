<template>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
  export default {
    async mounted() {
        window.global ||= window;
        const axios = require('axios').default
        const data = await axios.get('https://reqres.in/api/users');
        console.log(data);
    },
    data () {
      return {
        msg: 'Hello this is <Foo-Bar>'
      }
    }
  }
</script>
