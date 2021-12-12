let readline = require('readline-sync');

let isPrime = function(s) {
    let assert = require('assert');
    let er = 'Sorry! Only integers please!'
    assert(((s!='') && (Number.isInteger(Number(s)))===true),er);
    let m = parseInt(s);
    assert(m>=0,"Sorry! No negatives please!");
    let d = true;
    if (m===2) {d = false;}
    if (m>=3) {
        let i = 2;
        d = ((m % i) === 0);
        while ((d===false) && (i<m-1)){
            i++;
            d = ((m % i) === 0);
        }
    }
    return !d;
}

while (true){
    let ns = readline.question("\nA whole number please: ");
    let pri = isPrime(ns);
    console.log(ns + ' is prime: ' + pri);
}
