<template>
    <div class="home"><span @click="jumpPage('test')">测试</span><br /></div>
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
