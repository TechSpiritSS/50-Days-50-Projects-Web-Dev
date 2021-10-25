const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();

  btn.addEventListener("click", () => {
    let query = document.querySelector(".input").value;
    if (query != "") {
      const url = "http://www.google.com/search?q=" + query;
      window.open(url, "_blank");
      document.querySelector(".input").value = "";
    }
  });
});
