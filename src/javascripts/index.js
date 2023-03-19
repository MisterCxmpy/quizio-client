const openSignUpBtn = document.querySelector("#open-sign-up");
const openSignInBtn = document.querySelector("#open-sign-in");
const closeSignUpBtn = document.querySelector("#close-sign-up");
const closeSignInBtn = document.querySelector("#close-sign-in");
const signUpBtn = document.querySelector("#sign-up");

const signUpForm = document.querySelector("#sign-up-form");
const signInForm = document.querySelector("#sign-in-form");

const emailField = document.querySelector("#email");
const userField = document.querySelector("#username");
const passField = document.querySelector("#password");
const conPassField = document.querySelector("#conPassword");
const checkField = document.querySelector("#checkbox");

openSignUpBtn.addEventListener("click", () => {
  signUpForm.reset()
  document.body.classList.add("showSignupForm");
});

openSignInBtn.addEventListener("click", () => {
  signInForm.reset()
  document.body.classList.add("showSigninForm");
});

closeSignUpBtn.addEventListener("click", () => {
  document.body.classList.remove("showSignupForm");
});

closeSignInBtn.addEventListener("click", () => {
  document.body.classList.remove("showSigninForm");
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


signUpBtn.addEventListener("mousemove", (e) => {  
  e.preventDefault()

  if (checkValidity()) return

  var matrix = new WebKitCSSMatrix(window.getComputedStyle(signUpBtn).transform);

  // checks the transform of the signup button, this is the funtionality which allows the button to move on hover
  if (matrix.m41 == "0") {
    signUpBtn.className = "left";
  } else if (matrix.m41 >= "108") {
    signUpBtn.className = "right";
  } else if (matrix.m41 <= "-108") {
    signUpBtn.className = "left";
  }
});