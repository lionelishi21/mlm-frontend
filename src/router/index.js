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
import ForgotPassword from "../views/ForgotPassword";
import User from '../views/Users';
import Matrix from '../views/Matix'
import UserAffiliateDetails from '../views/UserDetails'
import { isLoggedIn } from '../utils/auth.js'
import PasswordReset from "../views/PasswordReset";
import Settings from "../views/Settings";
import Accounts from '../views/Accounts';
import PrivatePolicy from "../views/PrivatePolicy";
import Payouts from "../views/Payouts";
import Rayofhope from "../views/Rayofhope";
import BoosterPackages from "../views/BoosterPackages";
import RayofhopeDetails from "../views/RayofhopeDetails";
import MakePayment from "../views/MakePayment";
import Boosters from "../views/Boosters";
import BoosterDetails from "../views/BoosterDetails";
import UserBoosterDetails from "../views/UserBoosterDetails";
import Authentication from  "../layouts/Authentication";
import NewLogin from '../layouts/Login';
import ResetPassword from '../layouts/ForgotPassword';
import PageNotFound from '../views/PageNotFound';
import SystemPurchase from "../views/SystemPurchase";
import SystemPurchaseDetails from "../views/SystemPurchaseDetails";
import Transferwise from "../views/Transferwise";
Vue.use(VueRouter)

  const routes = [
      { path: "*", component: PageNotFound },
  {
    path: '/',
    component: Authentication,
    children: [
      {
        path: '',
        component: NewLogin,
        meta: {
          allowAnonymous: true
        }
      },

      {
        path:'/reset-password',
        component: PasswordReset,
        meta: {
          allowAnonymous: true
        }
      },

      {
        path: 'password-reset',
        component: ResetPassword,
        meta: {
          allowAnonymous: true
        }
      }
    ]
  },
  {
    path: '/dashboard',
    component: Home,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'signin',
        component: NewLogin,
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: 'make-payment/:id',
        component: MakePayment
      },
      {
        path: 'payouts',
        component: Payouts
      },
      {
        path: 'boosters',
        component: Boosters
      },
      {
        path: 'system-packages',
        component: SystemPurchase
      },
      {
        path: 'transferwise',
        component: Transferwise
      },
      {
        path: 'system-packages/details/:id',
        component: SystemPurchaseDetails
      },
      {
        path: 'booster-details/:id',
        component: BoosterDetails
      },

      {
        path: 'user-boosters/:id',
        component: UserBoosterDetails,
      },

      {
        path: 'booster-package',
        component: BoosterPackages
      },
      {
        path: 'accounts',
        component: Accounts
      },
      {
        path: 'rayofhope',
        component: Rayofhope
      },
      {
        path: "rayofhope-details/:id",
        component: RayofhopeDetails
      },

      {
        path: 'admin-dashboard',
        component: AdminDashboard
      },
      {
        path: 'affiliates',
        component: Affiliates
      },
      {
        path: 'matrix',
        name: 'Matrix',
        component: Matrix
      },
      {
        path: 'users',
        component: User
      },
      {
        path: 'affiliates/:id',
        component: Details
      },
      {
        path:'users-affiliates-details/:id',
        component: UserAffiliateDetails
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
      },
      {
        path: 'settings',
        name: 'Setting',
        component: Settings
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
  }
 
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  if (to.name == 'Login' && isLoggedIn()) {
    next({ path: '/dashboard' })

  } else if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else if (to.name == 'register' && isLoggedIn()) {
    next({ path: '/' })
  }  else {
    next()
  }
})



export default router


