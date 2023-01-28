import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credentials = () => import('../views/Credentials/index.vue')

const routes = [
  {
    path: '/',
    name: 'Feedbacker - Saiba o que seu cliente pensa sobre seu produto',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
