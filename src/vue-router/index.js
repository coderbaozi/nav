import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 //    {
 //      path: '/login',
 //      name: '登录',
 //      // route level code-splitting
 //      // this generates a separate chunk (About.[hash].js) for this route
 //      // which is lazy-loaded when the route is visited.
 //      component: () => import('../views/Login.vue')
 //    },
	{
		path: '/home',
		name: '起始页',
		component: ()=> import('../views/home.vue')
	}
  ]
})

export default router
