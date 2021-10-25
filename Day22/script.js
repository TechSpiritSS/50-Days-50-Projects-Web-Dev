const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const sizeSpan = document.getElementById("size");
const colorBtn = document.getElementById("color");
const clear = document.getElementById("clear");

let size = 20;
let color = colorBtn.value;
let x, y;
let isPressed = false;

function drawCircle(x, y) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2);
  context.fill();
}

function drawLine(x, y, p, q) {
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(p, q);
  context.lineWidth = size * 2;
  context.stroke();
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const p = e.offsetX;
    const q = e.offsetY;

    drawCircle(p, q);
    drawLine(x, y, p, q);

    x = p;
    y = q;
  }
});

decrease.addEventListener("click", () => {
  size--;

  if (size < 1) {
    size = 1;
  }

  sizeSpan.innerText = size;
});

increase.addEventListener("click", () => {
  size++;

  if (size > 50) {
    size = 50;
  }

  sizeSpan.innerText = size;
});

colorBtn.addEventListener("change", (e) => (color = e.target.value));
clear.addEventListener("click", () =>
  context.clearRect(0, 0, canvas.width, canvas.height)
);
