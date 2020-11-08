import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
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
    component: () => import('@/views/Admin/Admin.vue'),
    children: [
      {
        path: '',
        redirect: 'dashboard'
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { auth: ['001', '002', '003'] },
        component: () => import('@/views/Dashboard/Dashboard.vue')
      },
      {
        path: 'settings',
        name: 'Settings',
        meta: { auth: ['001', '002'] },
        component: () => import('@/views/Settings/Settings.vue')
      },
      {
        path: 'article',
        name: 'ArticleList',
        meta: { auth: ['001', '002', '003'] },
        component: () => import('@/views/Article/ArticleList.vue')
      },
      {
        path: 'article/edit',
        name: 'ArticleEdit',
        meta: { auth: ['001'] },
        component: () => import('@/views/Article/ArticleEdit.vue')
      },
      {
        path: 'notifications',
        name: 'Notifications',
        meta: { auth: ['001', '002', '003'] },
        component: () => import('@/views/Notifications/Notifications.vue')
      },
      {
        path: 'noauth',
        name: 'NoAuth',
        meta: { auth: ['001', '002', '003'] },
        component: () => import('@/views/NoAuth/NoAuth.vue')
      },
      {
        path: '*',
        redirect: '/404'
      }
    ]
  },
  {
    path: '/*',
    redirect: '/404'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to.path.includes('admin'))
  // console.log(to.meta.auth.includes(store.state.user.role))
  if (to.path.includes('admin')) {
    if (store.state.user.isLogin) {
      if (to.meta.auth.includes(store.state.user.role)){
        next();
      } else {
        next({ name: 'NoAuth' })
      }
    } else {
      next({ name: 'Login' })
    }
  } else {
    // next();
    // console.log(to.path)
    if(to.path.includes('404')){
      next();
    }else{
      if(store.state.user.isLogin){
        next({name:'Dashboard'});
      }else{
        next();
      }
    }
  }
})

export default router
