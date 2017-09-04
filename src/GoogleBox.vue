<template>
  <div>
    <app-gmap></app-gmap>
  </div>
</template>

<script>
import GoogleMap from './GoogleMap.vue'
export default {
  components: {
    'app-gmap': GoogleMap
  }
}
</script>

<style scoped>
  div {
    width: 800px;
    height: 400px;
    border: solid 1px black;
    padding: 0px 0px;
  }
  h1 {
    margin: 0px 0px;
  }
</style>


