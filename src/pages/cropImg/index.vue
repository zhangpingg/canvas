<template>
    <div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

/*
1)在画布上定位图像
    context.drawImage(img,x,y,width,height);
2)剪切图像
    context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
*/
const initCanvas = () => {
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    var img = new Image();
    c.width = 200;
    c.height = 200;
    img.src = '/canvas/src/assets/people.jpg';
    img.onload = function () {
        //ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, 320, 320, 0, 0, c.width / 2, c.height / 2);
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
</style>

