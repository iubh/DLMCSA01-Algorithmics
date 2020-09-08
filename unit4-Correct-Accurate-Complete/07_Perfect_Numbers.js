const isPerfect = require('number-isperfect');
let readline = require('readline-sync');
while (true){
    let num = parseInt(readline.question("\nA whole number please: "));
    let pf = isPerfect(num); console.log(num + ' is perfect: '+pf+'\n');
}
