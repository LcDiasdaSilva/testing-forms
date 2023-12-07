import { createRouter, createWebHistory } from 'vue-router'
import SignInPage from '../pages/SignInPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SignInPage
    },
  ]
})

export default router
