const clickMe = document.querySelector(".clickMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

clickMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const left = e.target.offsetLeft;
  const top = e.target.offsetTop;

  const xIn = x - left;
  const yIn = y - top;

  heart.style.top = `${yIn}px`;
  heart.style.left = `${xIn}px`;

  clickMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
};
