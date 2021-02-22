/*Five things can happen when a person gets hold of a calculator. They can hit:
a number key (0–9)
an operator key (+, -, ×, ÷)
the decimal key
the equals key
the clear key */

//call the smurfs to listen to the key presses

document.querySelector("#calculate").addEventListener("click", result);
document.querySelector("#add").addEventListener("click", addition);
document.querySelector("#subtract").addEventListener("click", subtraction);
document.querySelector("#multiply").addEventListener("click", multiplication);
document.querySelector("#divide").addEventListener("click", division);

//display it here
const output = document.querySelector("#operand");
console.log(output.textContent);
// create variables to store values
let displayNum = "";
let operation = 0;
let num1 = 0;
let num2 = 0;
let result = 0;

//!! important - remember that .querySelectorAll() does not return and array,
// ... but a NodeList object!
const numbers = document.querySelectorAll("#number");
for (const number of numbers) {
  number.addEventListener("click", getNumber);
}

function getNumber() {
  console.log("number Key!");
  displayNum += this.innerText;
  output.innerText = displayNum;
}

// need to figure out how to get the second number!!!
function saveNum() {
  if (operation != 0) {
    num2 = parseFloat(displayNum);
  } else {
    num1 = parseFloat(displayNum);
  }
  displayNum = "";
  output.innerText = displayNum;
}

// caulculate functions - use switch statement to pick operation
function addition() {
  saveNum();
  operation = 1;
}

function subtraction() {
  saveNum();
  operation = 2;
}

function multiplication() {
  saveNum();
  operation = 3;
}

function division() {
  saveNum();
  operation = 4;
}

// function getOperator() {
//   console.log("operator Key!");
// }
// function getResult() {
//   console.log("equal key");
// }

// const operator = document.querySelectorAll(".key-operator");
// for (const key of operator) {
//   key.addEventListener("click", getOperator);
// }
// operator.addEventListener("click", getOperator);

// const result = document.getElementById("calculate");
// result.addEventListener("click", getResult);

// const numbersArr = [];

// function getNumber() {
//   console.log("number Key!");
// }
// function getOperator() {
//   console.log("operator Key!");
// }
// function getResult() {
//   console.log("equal key");
// }

// make an object called calculator
//
