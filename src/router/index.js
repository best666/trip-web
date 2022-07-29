import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/home.vue'
import Favor from '@/views/favor/favor.vue'
import Order from '@/views/order/order.vue'
import Message from '@/views/message/message.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/favor',
      component: Favor
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/message',
      component: Message
    }
  ]
})

export default router
