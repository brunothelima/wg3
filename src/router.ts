import { createRouter, createWebHistory } from 'vue-router'
import { glob2Routes } from '@src/utils'

const router = createRouter({
  routes: [
    { path: '/', component: () => import('@src/pages/Login/index.vue') },
    
    // Pages/Playground routes
    glob2Routes( 
      '/playground',
      import.meta.glob('./Pages/Playground/*.vue'),
      import.meta.glob('./Pages/Playground/*/index.vue')
    )
  ],
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
