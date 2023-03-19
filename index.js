const openSignUpBtn = document.querySelector("#open-sign-up");
const openSignInBtn = document.querySelector("#open-sign-in");
const closeSignUpBtn = document.querySelector("#close-sign-up");
const closeSignInBtn = document.querySelector("#close-sign-in");
const signUp = document.querySelector("#sign-up");

const light = document.querySelector("#light");
const dark = document.querySelector("#dark");

const emailField = document.querySelector("#email");
const userField = document.querySelector("#username");
const passField = document.querySelector("#password");
const conPassField = document.querySelector("#conPassword");
const checkField = document.querySelector("#checkbox");


const logUserField = document.querySelector("#log-username");
const logPassField = document.querySelector("#log-password");
const logCheckField = document.querySelector("#remember-checkbox");

openSignUpBtn.addEventListener("click", () => {
  clearForm()
  document.body.classList.add("showSignupForm");
});

openSignInBtn.addEventListener("click", () => {
  clearForm()
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

const clearForm = () => {
  // clears the signup form
  signUp.className = ""
  emailField.value = ""
  userField.value = ""
  passField.value = "" 
  conPassField.value = ""
  checkField.checked = false

  // clears the login form
  logUserField.value = ""
  logPassField.value = ""
  logCheckField.checked = false
};

signUp.addEventListener("mousemove", (e) => {
  
  if (checkValidity()) return

  var matrix = new WebKitCSSMatrix(window.getComputedStyle(signUp).transform);

  // checks the transform of the signup button, this is the funtionality which allows the button to move on hover
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
