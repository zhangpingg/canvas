<template>
    <div>
        <canvas id="canvas"> </canvas>
        <canvas id="offCanvas" style="display: none"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

// 初始化
const initCanvas = () => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var offCanvas = document.getElementById('offCanvas');
    var offContext = offCanvas.getContext('2d');

    var image = new Image();
    var isMouseDown = false;
    var scale;
    let point;
    canvas.width = 300;
    canvas.height = 300;

    image.src = '/canvas/src/assets/people.jpg';
    image.onload = function () {
        offCanvas.width = image.width;
        offCanvas.height = image.height;
        scale = offCanvas.width / canvas.width;

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        offContext.drawImage(image, 0, 0);
    };
    function windowToCanvas(x, y) {
        var bbox = canvas.getBoundingClientRect();
        return { x: x - bbox.left, y: y - bbox.top };
    }

    canvas.onmousedown = function (e) {
        e.preventDefault();
        isMouseDown = true;
        point = windowToCanvas(e.clientX, e.clientY);
        console.log(point.x, point.y);
        drawCanvasWithMagnifier(true, point);
    };

    canvas.onmouseup = function (e) {
        e.preventDefault();
        isMouseDown = false;
        drawCanvasWithMagnifier(false);
    };

    canvas.onmouseout = function (e) {
        e.preventDefault();
        isMouseDown = false;
        drawCanvasWithMagnifier(false);
    };

    canvas.onmousemove = function (e) {
        e.preventDefault();
        if (isMouseDown == true) {
            point = windowToCanvas(e.clientX, e.clientY);
            console.log(point.x, point.y);
            drawCanvasWithMagnifier(true, point);
        }
    };

    function drawCanvasWithMagnifier(isShowMagnifier, point) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        if (isShowMagnifier == true) {
            drawMagnifier(point);
        }
    }

    function drawMagnifier(point) {
        var mr = 100;

        var imageLG_cx = point.x * scale;
        var imageLG_cy = point.y * scale;

        var sx = imageLG_cx - mr;
        var sy = imageLG_cy - mr;

        var dx = point.x - mr;
        var dy = point.y - mr;

        ctx.save();

        ctx.lineWidth = 10.0;
        ctx.strokeStyle = '#069';

        ctx.beginPath();
        ctx.arc(point.x, point.y, mr, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.clip();
        ctx.drawImage(offCanvas, sx, sy, 2 * mr, 2 * mr, dx, dy, 2 * mr, 2 * mr);
        ctx.restore();
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

