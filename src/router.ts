import { createRouter, createWebHistory } from 'vue-router'
import playgroundRoutes from '/@wg3/pages/Playground/routes'

// import { NavigationGuard } from 'vue-router'
// import { useUser } from './composables/useUser'

// Public paths
// const publicPaths = ['/login']

/**
 * Checks for user credentials on non public urls access
 */
// const isAuthorized: NavigationGuard = (to, from, next) => {
//   const { user } = useUser()
//   // Checks for the user jwt
//   if (!user.value?.jwt && !publicPaths.includes(to.path)) {
//     // Sends user to login
//     next('/login')
//     return
//   }
//   next()
// }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('/@wg3/pages/Login/index.vue') },
    playgroundRoutes
  ]
})

// router.beforeEach(isAuthorized)

export default router
