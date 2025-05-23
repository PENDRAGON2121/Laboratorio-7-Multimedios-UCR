import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('../views/FeaturesView.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('../views/PricingView.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue'),
        },
         {
          path: '/item/:id',
          name: 'item',
          props: (route) =>{
            return {
               id: +route.params.id
            }
          },
          component: () => import('../views/ItemView.vue'),
        },
      ]
    },
    {
      path: '/auth',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    }
  ],
})

export default router
