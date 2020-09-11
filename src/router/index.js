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
  },
  {
    // :usedId 는 외부(링크공유)에서 파라미터를 전달해주기 위해 설정해놓는 것 이다.
    // 내부에서는 :usedId 가 없어도 <router-link to="{ path: '/users', params: {userId: 1} }">테스트<router-link> 로 전달 가능하다
    path: '/users/:userId',
    name: 'users',
    component: () => import('@/views/sign/Users')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/Admin'),
    children: [
      {
        path: ':id',
        name: 'adminDetail',
        component: () => import('@/views/admin/AdminDetail'),
      },
      {
        path: ':id/edit',
        name: 'adminEdit',
        component: () => import('@/views/admin/AdminEdit'),
      }
    ]
  }
]

const router = createRouter({
  /** 기본값 해시모드 */
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
