import Vue from 'vue'
import Router from 'vue-router'
import { homeRoute, aboutRoute, createRoute, joinRoute, roomRoutes } from './routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/layout/container.vue'),
      children: [
        homeRoute,
        aboutRoute,
        createRoute,
        joinRoute,
        roomRoutes
      ]
    }
  ]
})
