const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
let rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomInt()}x${getRandomInt()}`;
}

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(10)) + 300;
}
