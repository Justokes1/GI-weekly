// TODO: EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function average(x) {
  for (let i = 0;i < x.length; i++) {
    total += x[i]; 
  }
  let avg = total / x.length;
  return avg;
};

console.log(average(nums));

// TODO: MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. 
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.

let pivot = [4, 5, 6, 7, 1, 2, 3]

function find(x, y) {
  for (let i = 0; i < y.length; i++) {
    if (y.includes(x)) {
      return y.indexOf(x);
    } else {
      return -1;
    }
  }
};

console.log(find(5, pivot));


// TODO: HARD: Create two buttons, one that when clicked turns the background of the body red. 
// The other, when clicked, turns the body's background color white. 
// Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 
// Create a single function that takes an input className and updates the body's classList to ONLY include that className



// TODO: VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

let coins = [1, 5, 10, 25];

function change() {
  
}

