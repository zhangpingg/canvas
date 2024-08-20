import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: '',
        redirect: '/home'
    },
    {
        path: `/home`,
        name: 'home',
        meta: {
            title: '首页',
            cache: true // 是否 keep-alive 缓存
        },
        component: () => import('@/pages/home/index.vue')
    },
    {
        path: `/test`,
        name: 'test',
        meta: {
            title: '测试',
            cache: true
        },
        component: () => import('@/pages/test/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory('/canvas'), // 设置基础路径为 '/canvas'
    routes
});

export default router;
