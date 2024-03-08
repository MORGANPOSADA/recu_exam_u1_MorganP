import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Registrers from '../components/Registrers.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    },
    {
      path: '/registrers',
      name: 'Registrers',
      component: Registrers
    },
  ]
})

export default router
