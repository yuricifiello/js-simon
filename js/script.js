// # ELEMENTI DOM
const countdownElement = document.getElementById("countdown");
const numbersListElement = document.getElementById("numbers-list");
const formElement = document.getElementById("answers-form");
const inputs = document.querySelectorAll("input");
const messageElement = document.getElementById("message");
const instructionsElement = document.getElementById("instructions");

let randomNumbers = [];

// GENERO 5 NUMERI DA 1 A 50
function generateRandomNumbers() {
  while (randomNumbers.length < 5) {
    const number = Math.floor(Math.random() * 50) + 1;
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }
}

// VISUALIZZO I NUMERI CHE SONO STATI CREATI CON GLI ELEMENTI DEL DOM (LI)
function displayNumbers() {
  numbersListElement.innerHTML = "";
  for (let i = 0; i < randomNumbers.length; i++) {
    const li = document.createElement("li");
    li.textContent = randomNumbers[i];
    li.classList.add("fs-3", "fw-bold");
    numbersListElement.appendChild(li);
  }
}
