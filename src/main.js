import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-svg-icon/Icon.vue'
import config from './config'
import VueRouter from 'vue-router'
import Player from './pages/Player.vue'
import Home from './pages/Home.vue'

const Bar = { template: '<div>bar</div>' }

Vue.use(VueRouter)

Vue.component('icon', Icon)

const router = new VueRouter({
  mode:   'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/bar', component: Bar },
    { path: '/:telegrmMassageId', component: Player }
  ] 
})

new Vue({
  el:     '#app',
  render: h => h(App),
  router
})
