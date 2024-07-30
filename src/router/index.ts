import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import TestPage from '@/views/TestPage.vue'
import IntroPage from '@/views/IntroPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'IntroPage',
    component: IntroPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
