import { createRouter, createWebHistory } from 'vue-router'
import { glob2Routes } from '@src/utils'

const routes = [{ path: '/', component: () => import('@src/pages/Login/index.vue') }]

routes.push(glob2Routes(
  '/playground',
  import.meta.glob('./Pages/Playground/*.vue'),
  import.meta.glob('./Pages/Playground/*/index.vue')
))

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
