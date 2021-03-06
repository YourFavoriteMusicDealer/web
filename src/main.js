import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-svg-icon/Icon.vue'
import config from './config'

Vue.component('icon', Icon)

new Vue({
  el:     '#app',
  render: h => h(App)
})
