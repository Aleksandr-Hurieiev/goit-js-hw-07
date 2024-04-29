const loginForm = document.querySelector(".login-form");

const submitForm = (elements) => {
  elements.preventDefault();
  const form = elements.currentTarget;
  const login = form.email.value.trim();
  const password = form.password.value.trim();
  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const info = {
    [form[0].name]: login,
    [form[1].name]: password,
  };
  console.log(info);
  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
};

loginForm.addEventListener("submit", submitForm);
