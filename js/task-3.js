const input = document.querySelector("input#name-input");
const newName = document.querySelector("span#name-output");

const creatNewName = (event) => {
  event.preventDefault();
  const trimValue = event.currentTarget.value.trim();
  if (trimValue.length > 0) {
    return (newName.textContent = ` ${event.currentTarget.value}`);
  }
  newName.textContent = "Anonymous";
};

input.addEventListener("input", creatNewName);
