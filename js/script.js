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

// INIZIO IL COUNTDOWN DI 30 SECONDI
let timeLeft = 30;
function startCountdown() {
  const interval = setInterval(() => {
    countdownElement.textContent = `${timeLeft}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      countdownElement.textContent = "";
      hideNumbersAndShowForm();
    }
  }, 1000);
}

// NASCONDO I NUMERI E VISUALIZZO IL FORM CON LA FUNZIONE "hideNumbersAndShowForm"
function hideNumbersAndShowForm() {
  numbersListElement.innerHTML = "";
  instructionsElement.textContent = "Scrivi i numeri che ricordi:";
  formElement.classList.remove("d-none");
}

// UTENTE VISUALIZZA I NUMERI GENERATI
formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const userNumbers = [];

  for (let i = 0; i < inputs.length; i++) {
    const value = parseInt(inputs[i].value);
    userNumbers.push(value);
  }

  const matchedNumbers = [];

  for (let i = 0; i < userNumbers.length; i++) {
    if (
      randomNumbers.includes(userNumbers[i]) &&
      !matchedNumbers.includes(userNumbers[i])
    ) {
      matchedNumbers.push(userNumbers[i]);
    }
  }

  messageElement.textContent = `Hai indovinato ${matchedNumbers.length} numeri `;
});

generateRandomNumbers();
displayNumbers();
startCountdown();
