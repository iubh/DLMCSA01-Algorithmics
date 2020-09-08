let readline = require('readline-sync');

while (true){
  let name = readline.question('\nWhat is your name? ');
  // \n is the character to go to a new line  
  console.log('Hello ' + name);
  // The plus sign stands here for the concatenation operator  
  console.log('Kind Regards');
}
