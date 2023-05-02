import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '关于我们',
      redirect: '/home',
      component: () => import('../views/about.vue'),
    },
    {
      path: '/home',
      name: '起始页',
      redirect: '/home/search',
      component: () => import('../views/home.vue'),
      children: [
        {
          path: '/home/search',
          name: '搜索栏',
          component: () => import('../components/feature-Search/Search.vue'),
        },
        {
          path: '/home/translate',
          name: '翻译栏',
          component: () => import('../components/feature-translate/Translate.vue'),
        },
      ],
    },
    {
      path: '/test',
      name: '测试功能',
      component: () => import('../views/test.vue'),
    },
  ],
})

export default router
