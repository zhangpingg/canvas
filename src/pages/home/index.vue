<template>
    <div class="home">
        <span @click="jumpPage('test')">测试</span><br />
        <span @click="jumpPage('baseCanvas')">基础的canvas</span><br />
        <span @click="jumpPage('cropImg')">裁剪图片</span><br />
        <span @click="jumpPage('scaleImg')">缩放图片</span><br />
        <span @click="jumpPage('watermark')">缩放图片+水印</span><br />
        <span @click="jumpPage('magnifier')">图片放大镜</span><br />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const jumpPage = (path) => {
    router.push({ path: `/${path}` });
};
</script>

<style scoped lang="scss">
.home {
    padding-left: 10px;
    span {
        cursor: pointer;
        &:hover {
            color: #f00;
        }
    }
}
</style>

