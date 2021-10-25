const toggles = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggles.addEventListener("click", () => {
  nav.classList.toggle("active");
});
