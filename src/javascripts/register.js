const errorText = document.querySelector("#reg-error-text");
const submit = document.querySelector("#sign-up-form");

const signUp = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch("http://localhost:5000/auth/signup", options);

  if (res.ok) {
    console.log("Successfuly logged in:", data);
  } else {
    errorText.innerText = res.statusText;
  }
}

const getFormData = () => {
  let formData = {};
  const inputs = document.querySelectorAll(".reg-form-data");
  inputs.forEach((input) => (formData[input.name] = input.value));

  return formData;
}

submit.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = getFormData();
  if (data["password"] === document.querySelector("#conPassword").value) {
    await signUp(data);
    submit.reset()
  } else {
    errorText.textContent = "Passwords do not match!";
    setTimeout( () => {
      errorText.textContent = "";
    }, 5000);
  }
});