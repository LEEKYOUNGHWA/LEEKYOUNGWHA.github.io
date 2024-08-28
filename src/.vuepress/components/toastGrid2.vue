<template>
  <component
    v-if="dynamicComponent" 
    :is="dynamicComponent"
    :data="gridProps.data" 
    :columns="gridProps.columns" 
    :options="gridProps.options"
    :theme="theme"
     @click="onClick"
  />
</template>
<script>
import 'tui-grid/dist/tui-grid.css'

export default {
  name: 'myGrid',
  data() {
    return {
      dynamicComponent: null,
      theme: 'clean',
      gridProps: {
        data: [
          { name: 'Beautiful222222',
            artist: 'Birdy',
            artist2: 'Birdy2'},
          { name: 'test',
            artist: 'Ed Sheeran',
            artist2: 'Birdy2'},
            { name: 'Beautiful',
            artist: 'Birdy',
            artist2: 'Birdy2'},
          { name: 'test',
            artist: 'Ed Sheeran',
            artist2: 'Birdy2'},
            { name: 'Beautiful',
            artist: 'Birdy',
            artist2: 'Birdy2'},
          { name: 'test',
            artist: 'Ed Sheeran',
            artist2: 'Birdy2'},
        ],
        columns: [
          {
            header: 'Name',
            name: 'name',
            width: 200
          },
          {
            header: 'Artist',
            name: 'artist',
            width: 500
          },
          {
            header: 'Artist2',
            name: 'artist2',
            width: 700
          }
        ],
        options: {
            scrollX: true,
            scrollY: true,
            rowHeight: 30,
            rowHeaders: ['checkbox'],
            draggable: true
          },
    }
    }
  },
  mounted() {
    window.global ||= window;
    // var Grid = require('tui-grid');
    import('../../../node_modules/@toast-ui/vue-grid').then(module => {
      this.dynamicComponent = module.Grid
    })
  },
  methods: {
    onClick(evt) {
      console.log(evt);
    }
  }
};
</script>