import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './pages/Home.vue'
import PlayerComponent from './pages/Player.vue'
import NotFoundComponent  from './pages/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:   'history',
  routes: [
    { path: '*', component: NotFoundComponent },
    { path: '/', component: HomeComponent },
    { path: '/:telegramMessageId', component: PlayerComponent, props: true }
  ] 
})

export default router 