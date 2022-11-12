import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: '测试功能',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/test.vue')
    },
	{
		path: '/home',
		name: '起始页',
		component: ()=> import('../views/home.vue'),
		children: [
			{
				path: 'search',
				name: '搜索框',
				component: ()=> import('../components/search.vue')
			}
		]
	}
  ]
});

export default router;
