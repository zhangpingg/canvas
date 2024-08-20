<template>
    <div>
        <canvas id="canvas"></canvas>
        <input type="range" id="scale-range" min="0.1" max="1.5" step="0.01" value="0.3" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const drawImageByScale = (canvas, context, img, scale) => {
    var imgWidth = 640 * scale;
    var imgHeight = 640 * scale;

    var dx = canvas.width / 2 - imgWidth / 2;
    var dy = canvas.height / 2 - imgHeight / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, dx, dy, imgWidth, imgHeight);
};

onMounted(() => {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var slider = document.getElementById('scale-range');
    var img = new Image();

    canvas.width = 300;
    canvas.height = 300;

    var scale = slider.value;

    img.src = '/canvas/src/assets/people.jpg';
    // 图片加载完后，将其显示在canvas中
    img.onload = function () {
        drawImageByScale(canvas, context, img, scale);
        slider.onmousemove = function () {
            scale = slider.value;
            drawImageByScale(canvas, context, img, scale);
        };
    };
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
