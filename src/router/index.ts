import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/Main.vue'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: MainLayout,
		children: [
			{
				path: '',
				name: 'Home',
				component: Home,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
