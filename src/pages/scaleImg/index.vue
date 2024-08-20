<template>
    <div>
        <canvas id="canvas"></canvas>
        <input type="range" id="scale-range" min="0.1" max="1.5" step="0.01" value="0.3" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import people from '@/assets/people.jpg';

// 缩放图片
const drawImageByScale = (canvas, ctx, img, scale) => {
    var imgWidth = 640 * scale;
    var imgHeight = 640 * scale;
    var dx = canvas.width / 2 - imgWidth / 2;
    var dy = canvas.height / 2 - imgHeight / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布上的所有内容
    ctx.drawImage(img, dx, dy, imgWidth, imgHeight);
};
// 初始化
const initCanvas = () => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var slider = document.getElementById('scale-range');
    var img = new Image();
    canvas.width = 300;
    canvas.height = 300;
    var scale = slider.value;
    img.src = people;
    img.onload = function () {
        drawImageByScale(canvas, ctx, img, scale);
        slider.onmousemove = function () {
            scale = slider.value;
            drawImageByScale(canvas, ctx, img, scale);
        };
    };
};

onMounted(() => {
    initCanvas();
});
</script>

<style scoped lang="less">
canvas {
    border: 1px solid #000;
}
input {
    display: block;
    margin-top: 20px;
    width: 300px;
}
</style>

