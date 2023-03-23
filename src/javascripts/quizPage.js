const quiz = document.querySelector("#quiz");

async function getQuestion() {
  let response = await fetch("http://localhost:5000/q/random");

  if (response.ok) {
    let res = await response.json();

    return res;
  } else {
    console.log("error");
  }
}

function populateQuiz(question) {
  let title = quiz.querySelector("h1");
  title.textContent = question.question;

  let desc = quiz.querySelector("p");
  if (question.desc) {
    desc.textContent = question.description;
  } else {
    desc.remove();
  }

  let grid = quiz.querySelector(".choices-grid");

  let choices = createAnswers(question.choices);
  grid.innerHTML = choices;
}

function createAnswers(choices) {
  let html = "";
  choices.forEach((choice) => {
    let c = `<button class="btn choice">${choice}</button>`;

    html += c;
  });

  return html;
}

document.addEventListener("DOMContentLoaded", async () => {
  let question = await getQuestion();
  populateQuiz(question);
});
