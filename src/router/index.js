import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/simple',
      name: 'CrudIndex',
      component: () => import('../views/crud/CrudIndex.vue')
    },
    {
      path: '/simple/create',
      name: 'CrudCreate',
      component: () => import('../views/crud/CrudCreate.vue')
    },
    {
      path: '/simple/:id/edit',
      name: 'CrudEdit',
      component: () => import('../views/crud/CrudEdit.vue'),
      props: true
    }
  ]
})

export default router
