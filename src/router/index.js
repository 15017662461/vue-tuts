import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    redirect:'/admin/dashboard'
  },
  {
    path: '/',
    redirect:'/admin'
  },
  {
    path:'/404',
    name:'NotFound',
    component:() => import ('@/views/NotFound/NotFound.vue')
  },
  {
    path:'/login',
    name:'Login',
    component:() => import ('@/views/Login/Login.vue')
  },
  {
    path:'/admin/dashboard',
    name:'Dashboard',
    component:() => import ('@/views/Dashboard/Dashboard.vue')
  },
  {
    path:'/admin/settings',
    name:'Settings',
    component:() => import ('@/views/Settings/Settings.vue')
  },
  {
    path:'/admin/article',
    name:'ArticleList',
    component:() => import ('@/views/Article/ArticleList.vue')
  },
  {
    path:'/admin/article/edit',
    name:'ArticleEdit',
    component:() => import ('@/views/Article/ArticleEdit.vue')
  },
  {
    path:'/admin/notifications',
    name:'Notifications',
    component:() => import ('@/views/Notifications/Notifications.vue')
  },
  {
    path:'/admin/noauth',
    name:'NoAuth',
    component:() => import ('@/views/NoAuth/NoAuth.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
