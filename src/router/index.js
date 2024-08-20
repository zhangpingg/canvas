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
    },
    {
        path: `/baseCanvas`,
        name: 'baseCanvas',
        meta: {
            title: '基础的canvas',
            cache: true
        },
        component: () => import('@/pages/baseCanvas/index.vue')
    },
    {
        path: `/cropImg`,
        name: 'cropImg',
        meta: {
            title: '裁剪图片',
            cache: true
        },
        component: () => import('@/pages/cropImg/index.vue')
    },
    {
        path: `/scaleImg`,
        name: 'scaleImg',
        meta: {
            title: '缩放图片',
            cache: true
        },
        component: () => import('@/pages/scaleImg/index.vue')
    },
    {
        path: `/watermark`,
        name: 'watermark',
        meta: {
            title: '水印',
            cache: true
        },
        component: () => import('@/pages/watermark/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory('/canvas'), // 设置基础路径为 '/canvas'
    routes
});

export default router;

