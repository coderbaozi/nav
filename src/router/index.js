import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '关于我们',
      component: () => import('../views/about.vue'),
    },
    {
      path: '/home',
      name: '起始页',
      component: () => import('../views/home.vue'),
    },
    {
      path: '/test',
      name: '测试功能',
      component: () => import('../views/test.vue'),
    },
  ],
})

export default router
