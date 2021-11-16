const cards = document.getElementById("cards");

let data = [
  "",
  "Expanding Cards",
  "Progress Steps",
  "Rotating Navigation",
  "Hidden Search Widget",
  "Blurry Loading",
  "Scroll Animation",
  "Split Landing Page",
  "Form Wave Animation",
  "Sound Board",
  "Dad Joke",
  "Event KeyCode",
  "FAQ Collapse",
  "Random Choice Picker",
  "Animated Navigation",
  "Increment Counter",
  "Drink Water",
  "Movie App",
  "Background Slider",
  "Theme Clock",
  "Button Ripple Effect",
  "Drag N Drop",
  "WhiteBoard",
  "Kinetic CSS Loader",
  "Content Placeholder",
  "Sticky Navbar",
  "Double Vertical Slider",
  "Toast Notification",
  "GitHub Profiles",
  "Heart Click",
  "Auto Typer",
  "Password Generator",
  "Quality Checker",
  "Notes",
  "Animation Countdown",
  "Image Carousel",
  "Hoverboard",
  "Pokedex",
  "Mobile Navigation",
  "Password Strength Checker",
  "3D Boxes",
  "OTP Checker",
  "User Filter",
  "Feedback UI",
  "Range Slider",
  "Netflix Navigator",
  "Quiz",
  "Testimonial",
  "Random Images (NO API)",
  "Todo",
  "Catcher Game",
];

getData();

function getData() {
  for (let i = 1; i <= 50; i++) {
    let link = "Day" + i + "/index.html";
    let img = "Day" + i + "/Screenshot.png";
    let Text = data[i];

    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-header animated-bg" id="header">        
          <img src="${img}" alt="${Text}">
        </div>

        <div class="card-content">
          <h3 class="card-title animated-bg animated-bg-text" id="title"> <a href="${link}">${Text}</a>
          </h3>
        </div>
      `;

    cards.appendChild(card);
  }
  setTimeout(animate, 1000);
}

const card = document.querySelectorAll(".card");

function animate() {
  card.forEach((card) => {
    const animated_bgs = card.querySelectorAll(".animated-bg");
    const animated_bg_texts = card.querySelectorAll(".animated-bg-text");

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
  });
}

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  card.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}
