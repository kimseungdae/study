import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/simon',
    name: 'simon',
    component: () => import('../views/simon.vue')
  },
  {
    path: '/keyword',
    name: 'keyword',
    component: () => import('../views/keyword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
