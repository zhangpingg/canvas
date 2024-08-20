<template>
    <div>
        <span>直线路径</span>
        <canvas id="myCanvas1" width="200" height="100"></canvas>

        <span>圆框</span>
        <canvas id="myCanvas2" width="200" height="100"></canvas>

        <span>矩形图</span>
        <canvas id="myCanvas3" width="200" height="100"></canvas>

        <span>矩形框</span>
        <canvas id="myCanvas4" width="200" height="100"></canvas> <br /><br />

        <span>线性渐变</span>
        <canvas id="myCanvas5" width="200" height="100"></canvas>

        <span>经向渐变</span>
        <canvas id="myCanvas6" width="200" height="100"></canvas>

        <span>渐变彩色边框</span>
        <canvas id="myCanvas7" width="200" height="100"></canvas>

        <span>实心文字</span>
        <canvas id="myCanvas8" width="200" height="100"></canvas> <br /><br />

        <span>空心文字</span>
        <canvas id="myCanvas9" width="200" height="100"></canvas>

        <span>空心彩色渐变文字</span>
        <canvas id="myCanvas10" width="200" height="100"></canvas>

        <span>图片</span>
        <canvas id="myCanvas11" width="200" height="100"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import roadBg from '@/assets/road-bg.jpg';

// 直线路径
const line = () => {
    var c = document.getElementById('myCanvas1');
    var ctx = c.getContext('2d');
    ctx.moveTo(10, 10); // moveTo(x,y) 定义线条开始坐标
    ctx.lineTo(190, 90); // lineTo(x,y) 定义线条结束坐标
    ctx.stroke(); // stroke() 方法绘制当前路径
};
// 圆框
const circularBorder = () => {
    var c = document.getElementById('myCanvas2');
    var ctx = c.getContext('2d');
    ctx.beginPath(); // 开始绘制
    ctx.arc(30, 50, 20, 0, 2 * Math.PI); // arc(x, y, r, start, stop)-坐标、半径、开始、结束
    ctx.stroke(); // stroke() 方法绘制当前路径
};

// 矩形图
const rectangleFill = () => {
    var c = document.getElementById('myCanvas3');
    var ctx = c.getContext('2d'); // 获取了一个 2D 渲染上下文
    ctx.fillStyle = '#ccc'; // 填充样式：设置fillStyle属性可以是CSS颜色，渐变，或图案
    ctx.fillRect(10, 10, 50, 50); // 填充方式：fillRect(x, y, width, height)
};
// 矩形框
const rectangleBorder = () => {
    var c = document.getElementById('myCanvas4');
    var ctx = c.getContext('2d');
    ctx.strokeStyle = '#f00'; // 边框样式：设置strokeStyle属性可以是CSS颜色，渐变，或图案
    ctx.strokeRect(10, 10, 50, 50); // 填充方式：strokeRect(x, y, width, height)
};
// 线性渐变
const gradientLinear = () => {
    var c = document.getElementById('myCanvas5');
    var ctx = c.getContext('2d');
    var grd = ctx.createLinearGradient(0, 0, 100, 0); // createLinearGradient(x,y,x1,y1) - 创建线性渐变
    grd.addColorStop(0, '#f00'); // addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1.
    grd.addColorStop(1, '#000');
    ctx.fillStyle = grd; // 填充样式：设置fillStyle属性可以是CSS颜色，渐变，或图案
    ctx.fillRect(10, 10, 100, 50); // 填充方式：fillRect(x, y, width, height)
};
// 径向渐变
const gradientRadial = () => {
    var c = document.getElementById('myCanvas6');
    var ctx = c.getContext('2d');
    var grd = ctx.createRadialGradient(10, 10, 25, 10, 10, 50); // createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
    grd.addColorStop(0, '#f00');
    grd.addColorStop(0.5, '#000');
    grd.addColorStop(1, '#0f0');
    ctx.fillStyle = grd; // 填充样式：设置fillStyle属性可以是CSS颜色，渐变，或图案
    ctx.fillRect(10, 10, 100, 50); // 填充方式：fillRect(x, y, width, height)
};
// 渐变彩色边框
const rectangleGradientBorder = () => {
    var c = document.getElementById('myCanvas7');
    var ctx = c.getContext('2d');
    var grd = ctx.createLinearGradient(0, 0, 100, 50); // createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
    grd.addColorStop(0, '#f00');
    grd.addColorStop(0.5, '#0f0');
    grd.addColorStop(1, '#00f');
    ctx.strokeStyle = grd; // 边框样式：设置strokeStyle属性可以是CSS颜色，渐变，或图案
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, 100, 50); // 填充方式：strokeRect(x, y, width, height)
};
// 实心文字
const textSolid = () => {
    var c = document.getElementById('myCanvas8');
    var ctx = c.getContext('2d');
    ctx.font = '30px Microsoft YaHei'; // 字体大小、字体
    ctx.fillText('你好', 10, 40); // fillText(text,x,y) - 在 canvas 上绘制实心的文本
};
// 空心文字
const textHollow = () => {
    var c = document.getElementById('myCanvas9');
    var ctx = c.getContext('2d');
    ctx.font = '30px Microsoft YaHei'; // 字体大小、字体
    ctx.strokeText('你好', 10, 40); // strokeText(text,x,y) - 在 canvas 上绘制空心的文本
};
// 空心彩色渐变文字
const textHollowGradient = () => {
    var c = document.getElementById('myCanvas10');
    var ctx = c.getContext('2d');
    ctx.font = '30px Microsoft YaHei';
    var grd = ctx.createLinearGradient(0, 0, c.width, 0);
    grd.addColorStop(0, '#f00');
    grd.addColorStop(0.5, '#0f0');
    grd.addColorStop(1, '#00f');
    ctx.strokeStyle = grd;
    ctx.strokeText('Big smile!', 10, 50);
};
// 图片
const photo = () => {
    var c = document.getElementById('myCanvas11');
    var ctx = c.getContext('2d');
    var img = new Image();
    img.src = roadBg;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, c.width, c.height); // ctx.drawImage(img,x,y,width,height); 把一幅图像放置到画布上
    };
};

onMounted(() => {
    line();
    circularBorder();
    rectangleFill();
    rectangleBorder();
    gradientLinear();
    gradientRadial();
    rectangleGradientBorder();
    textSolid();
    textHollow();
    textHollowGradient();
    photo();
});
</script>

<style scoped lang="less">
canvas {
    border: 1px solid #000;
    margin-right: 20px;
}
</style>

