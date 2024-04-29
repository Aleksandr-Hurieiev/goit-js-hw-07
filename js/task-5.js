function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");

function changeColor() {
  const number = getRandomHexColor();
  body.setAttribute("style", `background-color:${number}`);
  color.textContent = number;
}

btn.addEventListener("click", changeColor);
