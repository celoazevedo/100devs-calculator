//call the smurfs to listen to the key presses

document.querySelector("#calculate").addEventListener("click", operationResult);
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
  output.innerText = `${num1} +`;
}

function subtraction() {
  saveNum();
  operation = 2;
  output.innerText = `${num1} -`;
}

function multiplication() {
  saveNum();
  operation = 3;
  output.innerText = `${num1} *`;
}

function division() {
  saveNum();
  operation = 4;
  output.innerText = `${num1} /`;
}

function operationResult() {
  saveNum();
  switch (operation) {
    case 1:
      result = num1 + num2;
      output.innerText = result;
      break;
    case 2:
      result = num1 - num2;
      output.innerText = result;
      break;
    case 3:
      result = num1 * num2;
      output.innerText = result;
      break;
    case 4:
      result = num1 / num2;
      output.innerText = result;
      break;
    default:
      console.log("did not work!");
  }
}
