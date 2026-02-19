const canvas = document.querySelector("#myCanvas");
canvas.width = 400;
canvas.height = 400; 
canvas.style.border = "1vw solid black";

const ctx = canvas.getContext("2d");

// ctx.scale(2,2);
// ctx.translate(70,45);
// ctx.rotate(Math.PI/4);

// we translated the canvas and not the object.
// ctx.strokeRect(10,10,100,75);
// ctx.translate(100, 0);
// ctx.translate(0, canvas.height);
// ctx.scale(1,-1);
// ctx.translate(0, 240)

// ctx.beginPath();
// ctx.moveTo(60,60);
// ctx.lineTo(20,140);
// ctx.lineTo(100, 140);
// ctx.closePath();

// ctx.lineWidth = 3;
// ctx.stroke();


function drawCircle(x, y, radius, color, width){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
}

function drawPartialCircle(x, y, radius, fillColor, startAngle, endAngle){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = fillColor;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawLine(startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX,endY);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
}

// drawing the pole
drawLine(40,150,40,20);
drawLine(40,20,70,20);
drawLine(70,20,70,35);
// drawing the ground
drawLine(20,150,100,150);
// drawing the head
drawCircle(70,50,15,"black",2);
// drawing the body:
drawLine(70,65,70,110);
// drawing left arm:
drawLine(70,70,50,95);
// drawing right arm:
drawLine(70,70,90,95);
// drawing left leg:
drawLine(70,110,50,135);
// drawing right leg:
drawLine(70,110,90,135);


drawPartialCircle(250, 80, 60, "blue", -Math.PI/2, Math.PI/6);
drawPartialCircle(250, 80, 60, "red", Math.PI/6, Math.PI*(2/3));
drawPartialCircle(250, 80, 60, "green", Math.PI * (2/3), -Math.PI/2);


let originX = 100,
    originY = 250;
    factorTop = 1,
    factorBottom = .5;
drawCircle(originX, originY, 70, "blue", 4);
drawCircle(originX + originX*factorTop, originY, 70, "black", 4);
drawCircle(originX + originX*factorTop*2, originY, 70, "red", 4);
drawCircle(originX + originX*factorBottom, originY*1.25, 70, "yellow", 4);
drawCircle(originX + originX*factorBottom*3, originY*1.25, 70, "green", 4);

