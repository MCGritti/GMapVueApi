import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import GoogleBox from './GoogleBox.vue'
import FooRoute from './FooRoute.vue'

console.log('Teste')
Vue.use(VueRouter)

const routes = [
  {path: '/', component: GoogleBox},
  {path: '/foo', component: FooRoute}
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
