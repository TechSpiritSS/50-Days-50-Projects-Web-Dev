const container = document.getElementById("container");
const count = document.getElementById("count");
const generate = document.getElementById("generate");

update();

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  if (color === "#1d1d1d") {
    return getRandomColor();
  }

  return color;
}

function update() {
  const squares = count.value;
  container.innerHTML = "";
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
      let color = getRandomColor();
      square.style.backgroundColor = color;
      square.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`;
    });

    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "#1d1d1d";
      square.style.boxShadow = "0 0 2px #000";
    });

    container.appendChild(square);
  }
}

generate.addEventListener("click", () => {
  update();
});
