import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Player from './pages/Player.vue'
import NotFoundComponent  from './pages/404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:   'history',
  routes: [
    { path: '*', component: NotFoundComponent },
    { path: '/', component: Home },
    { path: '/:telegramMessageId', component: Player, props: true }
  ] 
})

export default router 