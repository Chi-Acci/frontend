import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/layout/container.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/about.vue')
        },
        {
          path: '/create',
          name: 'create',
          component: () => import('@/views/create.vue')
        },
        {
          path: '/join',
          name: 'join',
          component: () => import('@/views/join.vue')
        },
        {
          path: '/room/:id',
          name: 'room',
          component: () => import('@/views/room.vue')
        }
      ]
    }
  ]
})
