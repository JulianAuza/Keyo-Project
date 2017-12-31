import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Rewards from '@/components/Rewards'
import RegistrationCode from '@/components/RegistrationCode'
import Join from '@/components/Join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Rewards',
      name: 'Rewards',
      component: Rewards
    },
    {
      path: '/RegistrationCode',
      name: 'RegistrationCode',
      component: RegistrationCode
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    }
  ]
})
