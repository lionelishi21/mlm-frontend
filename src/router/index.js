import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Register from '@/views/Register.vue'
import Affiliates from '@/views/Affiliates.vue'
import Details from '@/views/Details.vue'
import Landing from '@/views/Landing.vue'
import LandingPage from '@/views/landing/index.vue'
import Checkout from '@/views/Checkout.vue'
import { isLoggedIn } from '../utils/auth.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'affiliates',
        component: Affiliates
      }, 
      {
        path: 'affiliates/:id',
        component: Details
      }
   ]
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    children: [
      {
        path: '',
        component: LandingPage,
        meta: {
           allowAnonymous: true
        }
      }, 
      {
        path: 'checkout',
        component: Checkout,
         meta: {
           allowAnonymous: true
        }
      },
      {
        path: '/login',
        component: Login,
        meta: {
           allowAnonymous: true
        }
      }
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.name == 'signin' && isLoggedIn()) {
    next({ path: '/' })
  } else if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/signin',
      query: { redirect: to.fullPath }
    })
  } else if (to.name == 'register' && isLoggedIn()) {
    next({ path: '/' })
  }  else {
    next()
  }
})

export default router


