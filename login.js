/* inputs  */
function login() {
  var email;
  var password;

  email = document.getElementsByClassName(inputMail).value;
  password = document.getElementsByClassName(inputPass).value;

  if (email === "vane@gmail.com" && password == "123.456$") {
    window.location = "main.html";
  }
}

/* checkbox */

const checkboxPart = document.getElementsByName(check);
const email = document.getElementsByName(inputMail);

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
    document.getElementsByName(inputPass).setAttribute("type", "password");
    state = false;
  } else {
    document.getElementsByClassName(inputPass).setAttribute("type", "text");
    state = true;
  }
}
