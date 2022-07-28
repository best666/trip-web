import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      directives: '/home',
      component: HomeView
    }
  ]
})

export default router
