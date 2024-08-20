<template>
    <div>
        <!-- 矩形 -->
        <canvas id="myCanvas" width="200" height="100"></canvas>

        <!-- 直线路径 -->
        <canvas id="myCanvas1" width="200" height="100"></canvas>

        <!-- 彩色矩形框 -->
        <canvas id="myCanvas1_1" width="200" height="100"></canvas>

        <!-- 圆形 -->
        <canvas id="myCanvas2" width="200" height="100"></canvas>

        <!-- 实心文字 -->
        <canvas id="myCanvas3" width="200" height="100"></canvas>

        <!-- 空心文字 -->
        <canvas id="myCanvas4" width="200" height="100"></canvas>

        <!-- 线性渐变 -->
        <canvas id="myCanvas5" width="200" height="100"></canvas>

        <!-- 经向渐变 -->
        <canvas id="myCanvas6" width="200" height="100"></canvas>

        <!-- 图片 -->
        <canvas id="myCanvas7" width="200" height="100"></canvas>
        <img src="@/assets/photo1.jpg" id="pic-1" style="display: none; width: 100%; height: auto" alt="" />

        <!-- 渐变彩色边框 -->
        <canvas id="myCanvas8" width="200" height="100"></canvas>

        <!-- 空心彩色渐变文字 -->
        <canvas id="myCanvas9" width="200" height="100"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    //矩形
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    //设置fillStyle属性可以是CSS颜色，渐变，或图案
    ctx.fillStyle = '#ccc';
    //fillRect(x,y,width,height) 方法定义了矩形当前的填充方式。
    ctx.fillRect(0, 0, 100, 50);

    //直线路径
    var c1 = document.getElementById('myCanvas1');
    var ctx1 = c1.getContext('2d');
    //moveTo(x,y) 定义线条开始坐标
    ctx1.moveTo(0, 0);
    //lineTo(x,y) 定义线条结束坐标
    ctx1.lineTo(200, 100);
    //stroke() 方法绘制当前路径
    ctx1.stroke();

    //彩色矩形框
    var c1_1 = document.getElementById('myCanvas1_1');
    var ctx1_1 = c1_1.getContext('2d');
    //设置strokeStyle属性可以是CSS颜色，渐变，或图案
    ctx1_1.strokeStyle = '#f00';
    //strokeRect(x,y,width,height) 方法定义了矩形当前的填充方式。
    ctx1_1.strokeRect(0, 0, 100, 50);

    //圆形
    var c2 = document.getElementById('myCanvas2');
    var ctx2 = c2.getContext('2d');
    //开始绘制
    ctx2.beginPath();
    //arc(x,y,r,start,stop)-坐标、半径、开始、结束
    ctx2.arc(20, 50, 20, 0, 2 * Math.PI);
    //stroke() 方法绘制当前路径
    ctx2.stroke();

    //实心文字
    var c3 = document.getElementById('myCanvas3');
    var ctx3 = c3.getContext('2d');
    //字体大小、字体
    ctx3.font = '30px Microsoft YaHei';
    //fillText(text,x,y) - 在 canvas 上绘制实心的文本
    ctx3.fillText('你好', 0, 30);

    //空心文字
    var c4 = document.getElementById('myCanvas4');
    var ctx4 = c4.getContext('2d');
    //字体大小、字体
    ctx4.font = '30px Microsoft YaHei';
    //strokeText(text,x,y) - 在 canvas 上绘制空心的文本
    ctx4.strokeText('你好', 0, 30);

    //线性渐变
    var c5 = document.getElementById('myCanvas5');
    var ctx5 = c5.getContext('2d');
    //createLinearGradient(x,y,x1,y1) - 创建线性渐变
    var grd5 = ctx5.createLinearGradient(0, 0, 100, 0);
    //addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1.
    grd5.addColorStop(0, '#f00');
    grd5.addColorStop(1, '#00f');
    //设置fillStyle属性可以是CSS颜色，渐变，或图案
    ctx5.fillStyle = grd5;
    //fillRect(x,y,width,height) 方法定义了矩形当前的填充方式。
    ctx5.fillRect(0, 0, 100, 50);

    //经向渐变
    var c6 = document.getElementById('myCanvas6');
    var ctx6 = c6.getContext('2d');
    //createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
    var grd6 = ctx6.createRadialGradient(0, 0, 25, 0, 0, 50);
    grd6.addColorStop(0, '#f00');
    grd6.addColorStop(1, '#00f');
    //设置fillStyle属性可以是CSS颜色，渐变，或图案
    ctx6.fillStyle = grd6;
    //fillRect(x,y,width,height) 方法定义了矩形当前的填充方式。
    ctx6.fillRect(0, 0, 100, 50);

    //图片
    var c7 = document.getElementById('myCanvas7');
    var ctx7 = c7.getContext('2d');
    var img7 = document.getElementById('pic-1');
    console.log(11, img7);
    //把一幅图像放置到画布上
    ctx7.drawImage(img7, 10, 10);

    //渐变彩色边框
    var c8 = document.getElementById('myCanvas8');
    var ctx8 = c8.getContext('2d');
    //createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
    var grd8 = ctx8.createLinearGradient(0, 0, 100, 50);
    grd8.addColorStop(0, '#f00');
    grd8.addColorStop(0.5, '#0f0');
    grd8.addColorStop(1, '#00f');
    //设置strokeStyle属性可以是CSS颜色，渐变，或图案
    ctx8.strokeStyle = grd8;
    ctx8.lineWidth = 5;
    //strokeRect(x,y,width,height) 方法定义了矩形当前的填充方式
    ctx8.strokeRect(0, 0, 100, 50);

    //空心彩色渐变文字
    var c9 = document.getElementById('myCanvas9');
    var ctx9 = c9.getContext('2d');
    ctx9.font = '30px Microsoft YaHei';
    var grd9 = ctx9.createLinearGradient(0, 0, c.width, 0);
    grd9.addColorStop(0, '#f00');
    grd9.addColorStop(0.5, '#0f0');
    grd9.addColorStop(1, '#00f');
    ctx9.strokeStyle = grd9;
    ctx9.strokeText('Big smile!', 10, 50);
});
</script>

<style scoped lang="less">
canvas {
    border: 1px solid #000;
}
</style>
