// Javascript Week 1

// TODO:// VERY EASY: Create two variables and assign a number to each. 
// Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”

let x = 6;
let y = 2;
  
console.log(`The difference between ${x} and ${y} is ${x - y}`);

// TODO:// EASY: Create two variables and assign a person’s name to each. 
// Console log a statement that says which name is shorter or longer, and by how many characters.                                                       Example output: “The name Thomas is longer than John by 2 characters”

let student1 = 'Justin';
let student2 = 'Billy';

console.log(`The name ${student1} is longer than ${student2} by ${student1.length - student2.length} character.`);

// TODO:// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), 
// or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

let tone = prompt("What would you like to say?"); 

if (tone === tone.toUpperCase()) {
  console.log('user is shouting')
} else if (tone === tone.toLowerCase()) {
  console.log('user is whispering')
} else {
  console.log ('user is talking normally')
};

// TODO:// HARD: Create 4 math functions, one called add() that adds 2 numbers, 
// one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

let x = 10;
let y = 20;

function add(){
  let sum = x + y;
  console.log (sum); 
}

add();

function subtract(){
  let difference = x - y;
  console.log (difference);
}

subtract();

function multiply(){
  let product = x * y;
  console.log (product)
}

multiply();

function divide(){
  let quotient = x / y;
  console.log(quotient);
}

divide();

// TODO:// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, 
// and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

var x;
var y;
var operator;

  let num1 = prompt('Choose your first number');
  var x = parseInt(num1,10);

  if (!isNaN(x)) {
    alert(`Your first value is ${x}`);
    } else {
    alert('You must choose a number');
  }

  let num2 = prompt('Choose your second number');
  var y = parseInt(num1,10);

  if (!isNaN(y)) {
    alert(`Your first value is ${y}`);
    } else {
    alert('You must choose a number');
  }  


  var operator = prompt('Please Choose A Operator');

  if (operator === '+'|| operator === '-'|| operator === '/'|| operator ==='*') {
    alert(`You Chose ${operator}`); 
   } else {
    alert('Input Invalid: Please select a Operator');
  }


function math() {
  if (operator === '+') {
    alert(`${x} + ${y} = ${x + y}`)
  } else if (operator ==='-') {
    alert(`${x} - ${y} = ${x - y}`)
  } else if (operator === '*') {
    alert(`${x} * ${y} = ${x * y}`)
  } else {
    alert(`${x} / ${y} = ${x / y}`)
  }
}
math();