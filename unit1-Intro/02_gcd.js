// Import the readline-sync module for user input
let readline = require('readline-sync');

// Function to calculate the greatest common divisor (GCD) of two numbers
let gcd =  function(n1, n2) {
  //Intialize the 'r' as the minimum of two numbers
  let r = Math.min(n1, n2);
  //Iterated until GCD is found
  //The while loop checks if both n1 and n2 are divisble of r, if not we reduce r by one value and recheck again
  while ( !( ((n1%r)===0) && ((n2%r)===0) ) ) {r--;} 
  //If GCD found, return r
  return r;
}

// Function to check if a string represents a strictly positive integer
let strictlyPosInt = function(s){
  let n = Number(s);
  // Check if the string is not empty, represents an integer, and is strictly positive
  return((s!=='') && (Number.isInteger(n)) &&  (n>0))
}

// Continuous loop for user input, (to end the loop use 'ctrl + c' in terminal)
while (true){
  
  // Messages prompting the user to enter two strictly positive integers
  let mess1 = '\nEnter the first strictly positive integer ';
  let mess2 = 'Enter the second strictly positive integer ';
  let mess3 = 'Only strictly positive integers please!';

  // Read user input for the first and second integers
  let ns = readline.question(mess1);
  let ms = readline.question(mess2);

  // Check if both inputs are strictly positive integers
  if ((strictlyPosInt(ns)) && (strictlyPosInt(ms))){
     // Convert input strings to integers
    let n = parseInt(ns); let m = parseInt(ms);
    // Display the GCD between the entered integers
    console.log('GCD between '+n+' and '+m+ ' is '+gcd(n,m));
  }
  // Display an error message if inputs are not strictly positive integers
  else {console.log(mess3);}
}
