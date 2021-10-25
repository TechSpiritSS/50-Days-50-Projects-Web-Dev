const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://unsplash.com/photos/bousNFVA-5o/download?ixid=MnwxMjA3fDB8MXxhbGx8N3x8fHx8fDJ8fDE2MzQ4MzU2NDA&force=true&w=1920">';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profile_img.innerHTML =
    '<img src="https://unsplash.com/photos/TcC5qr3dpgA/download?ixid=MnwxMjA3fDF8MXxhbGx8MTZ8fHx8fHwyfHwxNjM0ODM1NjQw&force=true&w=640" alt="" />';
  name.innerHTML = "Sidharth Sethi";
  date.innerHTML = "28 Feb, 2002";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
