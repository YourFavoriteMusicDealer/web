import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-svg-icon/Icon.vue'
import config from './config'
import router from './pages-router.js'

Vue.component('icon', Icon)

new Vue({
  el:     '#app',
  render: h => h(App),
  router
})
