import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Login.vue'

//const isLoggedIn=false;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
       //redirect:'login',
       //meta:{requiresAuth:true}
    },
    // {
    //   path: '/AI',
    //   name: 'AIview',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AIView.vue'),
    // },
      {
          path: '/Learn',
          name: 'Learnview',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/LearnView.vue'),
      },
      {
          path: '/Mine',
          name: 'Mine',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/MineView.vue'),
      },
      {
        path:'/login',
        name:'login',
        component:()=>import('../components/Login.vue'),
      },
      {
          path:'/Register',
        name:'register',
        component:()=>import('../views/RegisterView.vue')
      }
  ],
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login' || sessionStorage.getItem('token') || to.path ==='/Register') { // 检查登录状态
    console.log(to.path)
    next()
  } else {
        //console.log(localStorage.getItem('token'))
      //console.log(to.meta.requiresAuth)
    next('/login');
  }
})
export default router
