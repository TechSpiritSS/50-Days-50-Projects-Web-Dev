const randomUserApi = "https://randomuser.me/api/?results=200";
const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const response = await fetch(randomUserApi);
  const { results } = await response.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city} ${user.location.country}</p>
        </div>`;

    result.appendChild(li);
  });
}

function filterData(term) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(term.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
