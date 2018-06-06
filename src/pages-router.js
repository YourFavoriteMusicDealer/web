import Vue from 'vue'
import VueRouter from 'vue-router'
import Player from './pages/Player.vue'

const router = new VueRouter({
  mode:   'history',
  routes: [
    { path: '/:telegrmMassageId', component: Player }
  ] 
})

export default router 