let inputEl = document.getElementById("input");
let convertBtn = document.querySelector("#btn");

let lengthOutput = document.querySelector("#lengthOutput");
let volumeOutput = document.querySelector("#volumeOutput");
let massOutput = document.querySelector("#massOutput");

lengthOutput.textContent = "Ready to calculate...";
volumeOutput.textContent = "Ready to calculate...";
massOutput.textContent = "Ready to calculate...";

let metersOutput;
let feetOutput;
let litersOutput;
let gallonsOutput;
let kilogramsOutput;
let poundsOutput;

let userInput = inputEl.value;

convertBtn.addEventListener("click", calculateAll);

function calculateAll() {
  let userInput = inputEl.value;
  metersOutput = Number(userInput * 3.281).toFixed(3);
  feetOutput = Number(userInput / 3.281).toFixed(3);
  litersOutput = Number(userInput * 0.264).toFixed(3);
  gallonsOutput = Number(userInput / 0.264).toFixed(3);
  kilogramsOutput = Number(userInput * 2.204).toFixed(3);
  poundsOutput = Number(userInput / 2.204).toFixed(3);

  lengthOutput.textContent = `${userInput} meters = ${metersOutput} feet | ${userInput} feet = ${feetOutput} meters`;
  volumeOutput.textContent = `${userInput} liters = ${litersOutput} gallons | ${userInput} gallons = ${gallonsOutput} liters`;
  massOutput.textContent = `${userInput} kilogram = ${kilogramsOutput} pounds | ${userInput} pounds = ${poundsOutput} kilograms`;

  inputEl.value = "";
  inputEl.focus();
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
