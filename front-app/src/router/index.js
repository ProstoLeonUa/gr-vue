import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home'),
		meta: { layout: 'Main', auth: true }
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/Login.vue'),
		meta: { layout: 'LoginLayout' }
	},
	{
		path: '*', redirect: '/'
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	const isAuth = localStorage.token;
	const requireAuth = to.matched.some(record => record.meta.auth)
	if (requireAuth && !isAuth) {
		next('/login')
	} else {
		next()
	}

	if (isAuth && to.name === 'Login') {
		next('/')
	} else {
		next()
	}
})

export default router
