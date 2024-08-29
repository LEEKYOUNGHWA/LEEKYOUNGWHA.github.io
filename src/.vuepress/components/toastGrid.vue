<template>
  <component
    v-if="dynamicComponent" 
    :is="dynamicComponent"
    :data="data" 
    :columns="columns" 
    :options="options"
    :theme="theme"
  />
</template>
<script>
import 'tui-grid/dist/tui-grid.css'

export default {
  name: 'toastGrid',
  props: {
    data : {
      default: ()=> {
        return [
          { 
            name: 'Beautiful',
            artist: 'Birdy'
          },
          { 
            name: 'test',
            artist: 'Ed Sheeran'
          },
          { 
            name: 'Beautiful',
            artist: 'Birdy'
          }
        ]
      }
    },
    columns : {
      default : () => {
        return [
          {
            header: 'Name',
            name: 'name',
          },
          {
            header: 'Artist',
            name: 'artist',
            width: 450
          }
        ]
      }
    },
    options : {
      default : () => {
        return {
          scrollX: true,
          scrollY: true,
          rowHeight: 30,
          rowHeaders: ['checkbox'],
          draggable: true
        }
      }
    },
    theme : {
      default : 'clean'
    },
  },
  data() {
    return {
      dynamicComponent: null,
    }
  },
  mounted() {
    window.global ||= window;
    import('../../../node_modules/@toast-ui/vue-grid').then(module => {
      this.dynamicComponent = module.Grid
    })
  },
};
</script>
<style>
.tui-grid-table {
  margin: 0;
  width:max-content;
  box-sizing: border-box;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px hidden transparent;
  border-bottom: none;
  color: black;
}
</style>