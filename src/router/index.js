import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/main/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/index.vue')
    }
  ]
})
