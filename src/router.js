import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/Create.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('@/views/Join.vue')
    },
    {
      path: '/room/:id',
      name: 'room',
      component: () => import('@/views/Room.vue')
    }
  ]
})
