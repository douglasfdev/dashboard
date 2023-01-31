import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credentials = () => import('../views/Credentials/index.vue')

export const routes = [
  {
    path: '/',
    name: 'Feedbacker - Uma ferramenta para saber o que seu cliente pensa sobre você',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks - Veja o uso da ferramenta',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credenciais - Um espaço reservado para você',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { path: '/' }
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
