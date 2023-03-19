const light = document.querySelector("#light");
const dark = document.querySelector("#dark");

dark.addEventListener("click", () => {
  dark.style.display = "none";
  light.style.display = "block";

  window.document.body.className = "dark";
});

light.addEventListener("click", () => {
  light.style.display = "none";
  dark.style.display = "block";

  window.document.body.className = "light";
});
