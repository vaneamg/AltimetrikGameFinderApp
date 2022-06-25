/* validation  */
function validate() {
  let email = document.querySelector(".inputMail").value;
  let emailRegex = /^[a-zA-Z0-9\.-]+@[a-zA-Z0-9]+\.[a-zA-Z]+[a-zA-Z]*$/;
  let emailResult = emailRegex.test(email);

  let password = document.querySelector(".inputPass").value;
  let passRegex = /^[a-zA-Z0-9\.-]{3,16}$/;
  let passResult = passRegex.test(password);

  if (emailResult && passResult) {
    window.location.href = "localhost:5500/main.html";
  } else {
    alert("Incorrect credencials");
  }
}

/* checkbox */
const checkboxPart = document.querySelector(".check");
const email = document.querySelector(".inputMail");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  checkboxPart.setAttribute("checked", "checked");
  email.value = localStorage.username;
} else {
  checkboxPart.removeAttribute("checked");
  email.value = "";
}

function cbRemenberMe() {
  if (checkboxPart.checked && email.value !== "") {
    localStorage.username = email.value;
    localStorage.checkbox = checkboxPart.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}

/* eyeIcon */
var state = false;
function eye() {
  if (state) {
    document.querySelector(".inputPass").setAttribute("type", "password");
    state = false;
  } else {
    document.querySelector(i.nputPass).setAttribute("type", "text");
    state = true;
  }
}
