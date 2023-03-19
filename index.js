const openSignUpBtn = document.querySelector("#open-sign-up");
const closeSignUpBtn = document.querySelector(".popup-close");
const signUp = document.querySelector("#sign-up");

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
