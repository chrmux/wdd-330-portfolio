const canvasElement = document.getElementById('canvas');
const ctx = canvasElement.getContext('2d');


ctx.fillStyle = '#0c0'; // a blue fill color
ctx.font = 'bold 26px sans-serif';
ctx.fillText('Hello', 20, 200);


ctx.fillStyle = '#FD0';
ctx.fillRect(0, 0, 75, 75);
ctx.fillStyle = '#6C0';
ctx.fillRect(75, 0, 75, 75);
ctx.fillStyle = '#09F';
ctx.fillRect(0, 75, 75, 75);
ctx.fillStyle = '#F30';
ctx.fillRect(75, 75, 75, 75);
ctx.fillStyle = '#FFF';



ctx.arc(200, 200, 30, 0, Math.PI * 2, false);
ctx.strokeStyle = '#ff0';
ctx.lineWidth = 4;
ctx.stroke();