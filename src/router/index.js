import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFound/NotFound.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/admin',
    name: "Admin",
    component: () => import('@/views/Admin/Admin.vue'),
    children: [
      {
        path:'',
        redirect:'dashboard'
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/Dashboard.vue')
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/Settings/Settings.vue')
      },
      {
        path: 'article',
        name: 'ArticleList',
        component: () => import('@/views/Article/ArticleList.vue')
      },
      {
        path: 'article/edit',
        name: 'ArticleEdit',
        component: () => import('@/views/Article/ArticleEdit.vue')
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: () => import('@/views/Notifications/Notifications.vue')
      },
      {
        path: 'noauth',
        name: 'NoAuth',
        component: () => import('@/views/NoAuth/NoAuth.vue')
      },
      {
        path: '*',
        redirect:'/404'
      }
    ]
  },
  {
    path: '/*',
    redirect:'/404'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
