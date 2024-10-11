const targets = document.querySelectorAll(".target");
let initialColor;
if (targets.length > 0) {
  initialColor = window.getComputedStyle(targets[0]).backgroundColor;
}
let offsetX, offsetY;
let currentDiv = null;
let currentAction = null;
let previousTouchTime;

targets.forEach(target => {
  let initialPosX = target.offsetLeft;
  let initialPosY = target.offsetTop;

  target.addEventListener('mousedown', (event) => {
    if (!currentDiv) {
      currentDiv = target;
      currentAction = 'move';
      offsetX = event.clientX - target.offsetLeft;
      offsetY = event.clientY - target.offsetTop;
      target.style.zIndex = targets.length;
    }
  });
  
  document.addEventListener('mousemove', (event) => {
    if (target === currentDiv && currentAction) {
      target.style.left = `${event.clientX - offsetX}px`;
      target.style.top = `${event.clientY - offsetY}px`;
    }
  });

  
  target.addEventListener('mouseup', (event) => {
    if (target === currentDiv && currentAction === 'move') {
      currentDiv = null;
      currentAction = null;
      initialPosX = target.offsetLeft;
      initialPosY = target.offsetTop;
      target.style.zIndex = '1';
    }
  });

  target.addEventListener('dblclick', (event) => {
    if (!currentDiv) {
      currentDiv = target;
      currentAction = 'dblClick';
      offsetX = event.clientX - target.offsetLeft;
      offsetY = event.clientY - target.offsetTop;
      target.style.backgroundColor = '#F4F4F4';
      target.style.zIndex = targets.length;
    }
  });

  target.addEventListener('click', (event) => {
    if (target === currentDiv && currentAction === 'dblClick') {
      currentDiv = null;
      currentAction = null;
      initialPosX = target.offsetLeft;
      initialPosY = target.offsetTop;
      target.style.backgroundColor = initialColor;
      target.style.zIndex = '1';
    }
  });

  const resetPosition = () => {
    currentDiv = null;
    currentAction = null;
    target.style.left = `${initialPosX}px`;
    target.style.top = `${initialPosY}px`;
    target.style.backgroundColor = initialColor;
    target.style.zIndex = '1';
  }

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && currentDiv === target) {
      resetPosition();
    }
  });
});