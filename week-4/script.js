// Arrays, Functions, Objects, & Click Events

// TODO:// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function min(p1 , p2) {
  if (p1 < p2){
  console.log (p1)
  } else {
    console.log (p2)
  }
};

min(21 , 32);

// TODO:// EASY: Create an array of students holding their last name, first name, and age with 3 students. To
// validate, please log a greeting with the first name, last name and age of the 2nd student. The output
// should look like "Hello, my name is John Doe and I'm 19 years old." 

let students = [
  {
    'fName': 'Justin',
    'lName': 'Stokes',
    'age': 25
  },
  {
    'fName': 'John',
    'lName': 'Doe',
    'age': 19
  },
  {
    'fName': 'Billy',
    'lName': 'Blanks',
    'age': 66
  }
];

console.log(`My name is ${students[1]['fName']} ${students[1]['lName']} and I am ${students[1]['age']} years old.`)
console.log(students);


// TODO:// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let num = Number(prompt('Choose a whole number 1 - 12')) - 1;
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
if (num < 0 || num > 11 || num % 1 != 0) {
  alert('Input Invalid: Please choose a whole number 1-12')
} else {
  console.log(months[num]);
};

// TODO:// HARD: Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

let tHeight = 9;
let tMass = 8;
let jHeight = 10;
let jMass = 45;

function BMI(p1,p2) {
  p1 / Math.pow(p2, 2);
};

let info = Boolean(BMI(tMass, tHeight) > BMI(jMass, jHeight));

console.log(`Tom's BMI higher than Jerry's? ${info}`);
