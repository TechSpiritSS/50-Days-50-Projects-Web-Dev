const screens = document.querySelectorAll(".screen");
const chooseBtn = document.querySelectorAll(".choose-btn");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");

let seconds = 0;
let score = 0;
let selected_object = {};

startBtn.addEventListener("click", () => screens[0].classList.add("up"));

chooseBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_object = { src, alt };

    screens[1].classList.add("up");

    setTimeout(createObject, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  timeEl.innerHTML = `${m}:${s}`;
  seconds++;
}

function createObject() {
  const object = document.createElement("div");
  object.classList.add("object");
  const { x, y } = getRandomPosition();

  object.style.left = `${x}px`;
  object.style.top = `${y}px`;

  object.innerHTML = `<img src="${selected_object.src}" alt="${
    selected_object.alt
  }" style="transform: rotate(${Math.random() * 360}deg)"/>`;

  object.addEventListener("click", catchObject);

  gameContainer.appendChild(object);
}

function getRandomPosition() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.floor(Math.random() * (width - 200)) + 100;
  const y = Math.floor(Math.random() * (height - 200)) + 100;
  return { x, y };
}

function catchObject() {
  console.log("123");
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addObject();
}

function addObject() {
  setTimeout(createObject, 1000);
  setTimeout(createObject, 1500);
}

function increaseScore() {
  score++;
  scoreEl.innerHTML = score;
}
