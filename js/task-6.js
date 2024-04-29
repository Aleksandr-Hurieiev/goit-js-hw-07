function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCraete = document.querySelector("[data-create]");
const btnDeestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let newBox = "";
  let size = 30;

  for (let i = 0; i < amount; i++) {
    newBox += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }

  boxes.innerHTML = newBox;
}
function getBoxes() {
  const number = input.value;
  if (number >= 1 && number <= 100) {
    input.value = "";
    return createBoxes(number);
  }
  input.value = "";
  return alert("Please enter a number greater than 1 and less than 100");
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

btnCraete.addEventListener("click", getBoxes);
btnDeestroy.addEventListener("click", destroyBoxes);
