// node calculator.js
const readline = require("readline-sync");
// This is the addFunc
var addFunc = function(num1,num2) {
  result = num1 + num2;
  console.log("Result:" + result);
}
// This is the multFunc
var multFunc = function (num1,num2) {
  var result = num1 * num2;
  console.log("Result:" + result);
}
// This is the diviFunc
var diviFunc = function (num1,num2) {
  var result = num1 / num2;
  console.log("Result:" + result);
}
// This is the subtFunc
var subtFunc = function (num1,num2) {
  var result = num1 - num2;
  console.log("Result:" + result);
}
// this function check for user input and calls the right function
var Calculation = function(num1, num2, op) {
 
  if (op === "+") {
    addFunc(num1, num2);
  } else if (op === "-"){
    subtFunc(num1, num2);
  }else if (op === "*"){
    multFunc(num1, num2);
  }else if (op === "/"){
    diviFunc(num1, num2);
  } else
    console.log("ERROR")
    
} 
   
var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("Please enter another number: ");
var op = readline.question("Please enter an operator: ");

Calculation(num1, num2, op);

