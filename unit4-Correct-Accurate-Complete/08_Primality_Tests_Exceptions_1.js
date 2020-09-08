let readline = require('readline-sync');


let isPrime = function (s){
    if ((s==='') || (Number.isInteger(Number(s))===false)){
        return new Error("Sorry! Only integers please!");
    }
    else {
        let m = Number(s);
        if (m<0){
            return new Error("Sorry! No negatives please!");
        }
        else {
            let d = true;
            if (m===2) {d = false;}
            if (m>=3){
                let i = 2;
                d = ((m % i) === 0);
                while ((d===false) && (i<m-1)){
                    i++;
                    d = ((m % i) === 0);
                }
            }
            return !d;
        }
    }
}



while (true){
    let ns = readline.question("\nA whole number please: ");
    let pri = isPrime(ns);
    if (pri instanceof Error){
        console.log(ns + ' is prime: ' , pri, '\n');
    }
    else{
        console.log(ns + ' is prime: ' + pri + '\n');
    }
}
