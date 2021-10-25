const links = document.getElementById("links");

for (let i = 1; i <= 50; i++) {
  const link = document.createElement("a");
  link.classList.add("link");
  link.href = "Day" + i + "/index.html";
  link.target = "_blank";
  link.innerText = "Day " + i;
  links.appendChild(link);
}
