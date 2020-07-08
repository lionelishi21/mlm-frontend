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
import Howitworks from '@/views/Howitworks';
import OrderComplete from '@/views/OrderComplete.vue';
import Profile from '@/views/Profile.vue';
import UserHomePage from '@/views/UserHomePage.vue';
import Wallet from '@/views/Wallet.vue';  
import AdminDashboard from '@/views/AdminDashboard';
import Aboutus from '@/views/About.vue';
import Payment from "@/views/Payment.vue";
import Ebook from '@/views/Ebook.vue';

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
        path: 'admin', 
        component: AdminDashboard
      },
      {
        path: 'affiliates',
        component: Affiliates
      }, 
      {
        path: 'affiliates/:id',
        component: Details
      }, 
      {
        path: 'profile',
        component: Profile
      }, 
      {
        path: 'wallet',
        component: Wallet
      },
      {
        path: 'ebook',
        component: Ebook,

      }
   ]
  },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
   {
    path: '/homepage',
    component: UserHomePage,
    meta: {
      allowAnonymous: true
    }
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
        path: 'aboutus',
        name: 'About us', 
        component: Aboutus,
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
        path: 'howitworks',
        component: Howitworks,
        meta: {
           allowAnonymous: true
        }
      },
      {
        path: '/order-completed',
        component: OrderComplete,
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: '/register',
        component: Register,
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


