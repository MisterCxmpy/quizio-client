const openSignUpBtn = document.querySelector("#open-sign-up");
const closeSignUpBtn = document.querySelector(".popup-close");
const signUp = document.querySelector("#sign-up");

const light = document.querySelector("#light");
const dark = document.querySelector("#dark");

const emailField = document.querySelector("#email");
const userField = document.querySelector("#username");
const passField = document.querySelector("#password");
const conPassField = document.querySelector("#conPassword");
const checkField = document.querySelector("#checkbox");

openSignUpBtn.addEventListener("click", () => {
  clearForm()
  document.body.classList.add("showSignupForm");
});

closeSignUpBtn.addEventListener("click", () => {
  document.body.classList.remove("showSignupForm");
});

const checkValidity = () => {
  if (
    emailField.value &&
    userField.value &&
    passField.value &&
    conPassField.value &&
    checkField.checked
  )
    return true;

  return false
};

const clearForm = () => {
  emailField.value = ""
  userField.value = ""
  passField.value = "" 
  conPassField.value = ""
  checkField.checked = false
};

signUp.addEventListener("mousemove", (e) => {
  
  if (checkValidity()) return

  var matrix = new WebKitCSSMatrix(window.getComputedStyle(signUp).transform);

  if (matrix.m41 == "0") {
    signUp.className = "left";
  } else if (matrix.m41 >= "108") {
    signUp.className = "right";
  } else if (matrix.m41 <= "-108") {
    signUp.className = "left";
  }
});

dark.addEventListener("click", () => {
  dark.style.display = "none"
  light.style.display = "block"

  window.document.body.className ="dark"
})

light.addEventListener("click", () => {
  light.style.display = "none"
  dark.style.display = "block"

  window.document.body.className ="light"
})
