import { createRouter, createWebHistory } from 'vue-router'
import { glob2Routes } from '@src/utils'

const playgroundRoutes = glob2Routes( 
  '/playground',
  import.meta.glob('./Pages/Playground/*.vue'),
  import.meta.glob('./Pages/Playground/*/index.vue')
)

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    // Login/Home route
    { path: '/', component: () => import('@src/pages/Login/index.vue') },

    // Pages/Playground routes
    { 
      path: '/playground',  
      component: () => import('@src/pages/Playground/index.vue'),
      children: playgroundRoutes 
    }
  ],
})

export default router
