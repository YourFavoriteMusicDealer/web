import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './pages/Home.vue'
import PlayerComponent from './pages/Player.vue'
import NotFoundComponent  from './pages/NotFound.vue'
import PathToRegexp  from 'path-to-regexp'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:   'history',
  routes: [
    { path: '*', component: NotFoundComponent },
    { path: '/', component: HomeComponent },
    { path: '/:telegramMessageId([0-9]+)', component: PlayerComponent, props: true }
  ] 
})

export default router 