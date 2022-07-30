import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue') //使用路由懒加载
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/favor.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/order/order.vue')
    },
    {
      path: '/message',
      component: () => import('@/views/message/message.vue')
    },
    {
      path: '/city',
      component: () => import('@/views/city/city.vue'),
      meta: {
        hideTabBar: true //隐藏tabbar
      }
    }
  ]
})

export default router
