import { createRouter, createWebHashHistory, Router,RouterOptions,RouteRecordRaw} from 'vue-router'
const routes:RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
]

const options:RouterOptions = {
    history: createWebHashHistory(),
    routes
}

const router:Router = createRouter(options)

export default router