const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const position = document.querySelector(".role");

const testimonialsData = [
  {
    name: "Shina",
    role: "Front-end Developer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "I am a front-end developer with a passion for design and technology. I am a self-taught developer and I am always looking for new challenges to learn and grow.",
  },
  {
    name: "John Doe",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vel voluptas consequatur mollitia dolor pariatur iusto quasi nesciunt quibusdam quam quod sit ipsa eum reiciendis modi laudantium esse, ea fugit facere accusantium, saepe officiis eos. Error dolorem molestias dolore hic ut deleniti recusandae corrupti quae, mollitia fugit minima nihil quas reprehenderit amet vitae cupiditate ipsa aspernatur. Rerum minus aspernatur eligendi architecto, nihil consequuntur, nostrum ipsa eveniet beatae ea, suscipit iure accusamus? Sapiente rem deleniti eum aspernatur qui ab sint voluptates voluptas facilis numquam odit dignissimos ducimus error dolorum minima eos praesentium, laborum deserunt architecto officiis dolore corrupti. Libero, ab voluptatem!",
  },
  {
    name: "Jane Doe",
    role: "Web Designer",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus similique facilis ipsum, reprehenderit explicabo libero minus veritatis eos aperiam possimus cupiditate porro maiores. Eveniet harum minus laudantium impedit quod cumque porro quibusdam, adipisci minima explicabo nulla architecto maiores culpa ullam unde quas odio est iste? Eligendi, eveniet. Ab sunt temporibus saepe maiores cum nam, error dolores incidunt. Quae impedit nam id tempore est voluptates cupiditate similique sunt cum saepe, corporis quis perferendis illo magni sapiente?",
  },
  {
    name: "Joe Arc",
    role: "Database Manager",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ab delectus quibusdam asperiores. Vitae non odio perspiciatis! Aliquam ab saepe necessitatibus veniam facilis sint est labore deleniti soluta, quo minus at cum inventore, iure dicta suscipit, corrupti aut dolore fugiat? Ea facilis consectetur nulla atque modi temporibus ab numquam sunt animi. Deserunt voluptates obcaecati enim libero beatae animi corrupti, vitae nostrum rerum voluptate eveniet! Quos vitae aliquid quibusdam error in dignissimos fugit tempora assumenda repellat, voluptates molestiae vel distinctio ipsum.",
  },
];

let idx = 1;
function updateTestimonial() {
  const { name, role, image, text } = testimonialsData[idx];

  testimonial.innerHTML = text;
  userName.innerHTML = name;
  position.innerHTML = role;
  userImage.src = image;

  idx++;

  if (idx >= testimonialsData.length) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
