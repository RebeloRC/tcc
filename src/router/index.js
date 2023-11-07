import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/DashboardPage.vue')
    },
    {
      path: '/customers',
      name: 'Customers',
      component: () => import('../views/CustomersPage.vue')
    }
  ]
})

export default router