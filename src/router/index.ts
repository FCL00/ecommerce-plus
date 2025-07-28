import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAuth } from '@/stores/auth'
import { ElMessage } from 'element-plus'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const auth = useAuth()
  auth.loadAuthFromStorage()

  if (to.meta.requiresAuth && (!auth.user || !auth.token)) {
    ElMessage.info('You must log in first')
    next('/login')
  } else if (to.meta.requiresGuest && auth.user && auth.token) {
    ElMessage.info('You are already logged in')
    next('/')
  } else {
    next()
  }
})

export default router
