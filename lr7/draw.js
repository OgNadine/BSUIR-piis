const canvas = document.getElementById('canvas');
let isDrawing = false;
let startX, startY, currentShape;
let currentTool = 'circle';
let currentColor = 'black';

function startDrawing(event) {
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
}

function draw(event) {
    if (!isDrawing) return;

    const endX = event.offsetX;
    const endY = event.offsetY;

    if (currentShape) {
        canvas.removeChild(currentShape);
    }

    if (currentTool === 'circle') {
        const radius = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', startX);
        circle.setAttribute('cy', startY);
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', currentColor);
        circle.setAttribute('stroke', currentColor); 
        currentShape = circle;
        canvas.appendChild(circle);
    } else if (currentTool === 'rectangle') {
        const width = Math.abs(endX - startX);
        const height = Math.abs(endY - startY);
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', Math.min(startX, endX));
        rect.setAttribute('y', Math.min(startY, endY));
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', currentColor);
        rect.setAttribute('stroke', currentColor);
        currentShape = rect;
        canvas.appendChild(rect);
    }
}

function stopDrawing() {
    isDrawing = false;
    currentShape = null;
}

document.getElementById('circleBtn').addEventListener('click', () => {
    currentTool = 'circle';
});

document.getElementById('rectangleBtn').addEventListener('click', () => {
    currentTool = 'rectangle';
});

const colorButtons = document.querySelectorAll('.colorBtn');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentColor = button.getAttribute('data-color');
    });
});

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);
