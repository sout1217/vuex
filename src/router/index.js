import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'signInPage',
    component: () => import('@/views/sign/SignIn')
  },
  {
    path: '/sign-up',
    name: 'signUpPage',
    component: () => import('@/views/sign/SignUp')
  },
  {
    path: '/sign-out',
    name: 'signOutPage',
    component: () => import('@/views/sign/SignOut')
  }
]

const router = createRouter({
  /** 기본값 해시모드 */
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
