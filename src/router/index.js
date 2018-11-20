import Vue from 'vue'
import Router from 'vue-router'
import Client from '@/components/Client'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Client',
      component: Client
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
