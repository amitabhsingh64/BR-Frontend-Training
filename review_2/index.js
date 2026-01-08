let num;

const result_declare = document.getElementById("result");
const input_field = document.getElementById("num_input");
const err = document.getElementById("error");
const button_check = document.getElementById("check");
const button_restart = document.getElementById("reset");
const questionMark = document.getElementById("number");

window.addEventListener("load", (e) => {
  num = Math.floor(Math.random() * 10) + 1;
});

function restart() {
  num = Math.floor(Math.random() * 10) + 1;
  const result_declare = document.getElementById("result");
  const temp = document.getElementById("num_input");
  result_declare.innerHTML = ` `;
  temp.value = ` `;
  err.innerHTML = ` `;
  questionMark.innerHTML = `?`;
}

function inputValidation() {
  if (input_field.value) {
    let num_parse = parseInt(input_field.value, 10);
    if (num_parse > 10 || num_parse < 1) {
      const err = document.getElementById("error");
      err.innerHTML = `Invalid input ${num_parse}`;
      input_field.value = ` `;
    }
  }
}

function checkGuess() {
  inputValidation();
  const input = document.getElementById("num_input");
  const result_declare = document.getElementById("result");
  let input_num = Number(input.value);
  if (input_num != "") {
    if (input_num === num) {
      result_declare.innerHTML = "Guessed right";
      questionMark.innerHTML = `${num}`;
    } else {
      result_declare.innerHTML = `Guessed Wrong`;
      questionMark.innerHTML = `${num}`;
    }
  }
}

button_check.addEventListener("click", checkGuess);
button_restart.addEventListener("click", restart);
input_field.addEventListener("input", inputValidation);
