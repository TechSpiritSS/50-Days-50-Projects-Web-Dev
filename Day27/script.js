const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const message = ["Message One", "Message Two", "Message Three", "Message Four"];

const type = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return message[Math.floor(Math.random() * message.length)];
}

function getRandomType() {
  return type[Math.floor(Math.random() * type.length)];
}
