import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const isLoggedIn=false;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // redirect:'login',
       meta:{requiresAuth:true}
    },
    {
      path: '/AI',
      name: 'AIview',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AIView.vue'),
    },
      {
          path: '/Content',
          name: 'Contentview',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ContentView.vue'),
      },
      {
          path: '/visualization',
          name: 'visualizationview',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/VisualizationView.vue'),
      },
      {
        path:'/login',
        name:'login',
        component:()=>import('../components/Login.vue'),
      },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn) { // 检查登录状态
    next('/login') // 未登录跳转到登录页
  } else {
    next()
  }
})
export default router
