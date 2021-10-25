const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No Profile with this username");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");

    createRepoCard(data);
  } catch (err) {
    createErrorCard("Can't Fetch the repos");
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
    <img
    src="${user.avatar_url}" alt="${user.name}"
    class="avatar"
    />
    </div>
    <div class="user-info">
    <h2>${user.name}</h2>
    <p>
      ${user.bio}
      </p>
      <ul>
      <li>${user.followers} Followers </li>
      <li>${user.following} Followings </li>
      <li>${user.public_repos} Repos </li>
    </ul>
    
    <div id="repos">
    </div>
    </div>
    </div>`;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
    <h1>${msg}<h1>
    </div>`;

  main.innerHTML = cardHTML;
}
function createRepoCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}
