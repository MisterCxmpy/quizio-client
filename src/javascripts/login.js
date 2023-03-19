const logErrorText = document.querySelector("#log-error-text");
const logSubmit = document.querySelector("#sign-in-form");

const logIn = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(`http://localhost:5000/auth/login`, options);

  if (res.ok) {
    console.log("Successfuly logged in:", data);
  } else {
    logErrorText.textContent = res.statusText;
    setTimeout( () => {
      logErrorText.textContent = "";
    }, 5000);
  }
}

const getLogFormData = () => {
  let formData = {};
  const inputs = document.querySelectorAll(".log-form-data");
  inputs.forEach((input) => (formData[input.name] = input.value));

  return formData;
}

logSubmit.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = getLogFormData();
  await logIn(data);
  logSubmit.reset()
});