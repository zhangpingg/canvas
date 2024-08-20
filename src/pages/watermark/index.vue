<template>
    <div>
        <canvas id="canvas"></canvas>
        <input type="range" id="scale-range" min="0.1" max="1.5" step="0.01" value="1" />
        <canvas id="watermark-canvas" style="display: none"> 您的浏览器尚不支持canvas </canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

// 初始化
const initCanvas = () => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var slider = document.getElementById('scale-range');
    var img = new Image();
    var watermarkCanvas = document.getElementById('watermark-canvas');
    var watermarkContext = watermarkCanvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 300;
    var scale = slider.value;
    img.src = '/canvas/src/assets/people.jpg';
    // 图片加载完后，将其显示在canvas中
    img.onload = function () {
        drawImageByScale(scale);
        slider.onmousemove = function () {
            scale = slider.value;
            drawImageByScale(scale);
        };
    };
    // 绘制水印
    watermarkCanvas.width = 300;
    watermarkCanvas.height = 100;
    watermarkContext.font = 'bold 20px Arial';
    watermarkContext.lineWidth = '1';
    watermarkContext.fillStyle = 'rgba( 000 , 000 , 000 , 0.5 )';
    watermarkContext.textBaseline = 'middle';
    watermarkContext.fillText('张小帅-水印', 50, 70);
    // 绘制图片
    function drawImageByScale(scale) {
        var imgWidth = 640 * scale;
        var imgHeight = 640 * scale;
        var dx = canvas.width / 2 - imgWidth / 2;
        var dy = canvas.height / 2 - imgHeight / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, dx, dy, imgWidth, imgHeight);
        ctx.drawImage(watermarkCanvas, canvas.width - watermarkCanvas.width, canvas.height - watermarkCanvas.height);
    }
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

