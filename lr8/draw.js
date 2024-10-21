const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const shapes = [];

let isDrawing = false;
let startX, startY;

canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    ctx.strokeStyle='green';
});

canvas.addEventListener('mousemove', e => {
    if (!isDrawing) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (document.getElementById('circle').checked) {
        const radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));
        ctx.beginPath();
        ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    } else if (document.getElementById('rectangle').checked) {
        const width = e.offsetX - startX;
        const height = e.offsetY - startY;
        ctx.strokeRect(startX, startY, width, height);
    }

    shapes.forEach(shape => {
        ctx.stroke(shape);
    });
});

canvas.addEventListener('mouseup', e => {
    isDrawing = false;

    if (document.getElementById('circle').checked) {
        const radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));
        shapes.push(new Path2D());
        shapes[shapes.length - 1].arc(startX, startY, radius, 0, 2 * Math.PI);
    } else if (document.getElementById('rectangle').checked) {
        const width = e.offsetX - startX;
        const height = e.offsetY - startY;
        shapes.push(new Path2D());
        shapes[shapes.length - 1].rect(startX, startY, width, height);
    }
});