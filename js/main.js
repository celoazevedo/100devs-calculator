/*Five things can happen when a person gets hold of a calculator. They can hit:
a number key (0–9)
an operator key (+, -, ×, ÷)
the decimal key
the equals key
the clear key */

//display it here
const output = document.querySelector("#operand");
console.log(output.textContent);
//
//call the smurfs to listen to the key presses
//!! important - remember that .querySelectorAll() does not return and array,
// ... but a NodeList object!
const numbers = document.querySelectorAll("#number");
for (const number of numbers) {
  number.addEventListener("click", getNumber);
}

const operator = document.querySelectorAll(".key-operator");
for (const key of operator) {
  key.addEventListener("click", getOperator);
}
// operator.addEventListener("click", getOperator);

const result = document.getElementById("calculate");
result.addEventListener("click", getResult);

function getNumber() {
  console.log("number Key!");
}
function getOperator() {
  console.log("operator Key!");
}
function getResult() {
  console.log("equal key");
}

// const num1 = "";
// const num2 = "";
// const result = "";

// function Calculator(output) {
//   this.output = output;
// }
