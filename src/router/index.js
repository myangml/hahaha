import Vue from 'vue';

import VueRouter from 'vue-router';

import AllClazz from '../views/AllClazz.vue';
import AllStudent from '../views/AllStudent.vue';
import Back from '../views/Back.vue';
import HealthMange from '../views/HealthMange.vue';
import Login from '../views/Login.vue';
import Reg from '../views/Reg.vue';

Vue.use(VueRouter) // ss /sss

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/back',
    name: 'Back',
    component: Back,
    children:[
      {
        path: '/allClazz',
        name: 'AllClazz',
        component: AllClazz
      },
      {
        path: '/healthMange',
        name: 'HealthMange',
        component: HealthMange
      },
      {
        path: '/allStudent',
        name: 'AllStudent',
        component: AllStudent
      }
    ]
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
