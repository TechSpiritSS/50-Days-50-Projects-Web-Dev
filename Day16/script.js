const smallCups = document.querySelectorAll(".cup-small");
const litres = document.getElementById("litres");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const total = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / total) * 330}px`;
    percentage.innerText = `${(fullCups / total) * 100}%`;
  }

  if (fullCups === total) {
    remained.style.visibility = "hidden";
    remained.height = 0;
  } else {
    remained.style.visibility = "visible";
    litres.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
