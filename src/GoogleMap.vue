<template>
  <div id='app-map'>
  </div>
</template>

<script>
  import GLoader from 'google-maps'
  export default {
    data () {
      return {
        ativos: [
          {}
        ]
      }
    },
    methods: {
      onMenuClick () {

      }
    },
    created () {
      // TODO: Getter ativos
    },
    mounted () {
      GLoader.KEY = 'AIzaSyCXhTaP2jFiGOnKQ8QqdlAw8IpKFnY5b0Y';
      const element = document.getElementById('app-map')
      const options = {
        zoom: 10,
        center: {lat:-25.437266, lng:-49.236927}
      }
      GLoader.load( (google, element, options) => new google.maps.Map(element, options) )
    }
  }
</script>

<style scoped>
  div {
    width: 100%;
    height: 100%;
    background-color: gray;
    border: solid 0px white;
    margin: 0px 0px;
    padding: 0px 0px;
  }

  h2 {
    margin: 0 0;
    padding: 0 0;
  }
</style>