let readline = require('readline-sync');


let isPrime = function (s){
    try {
        if ((s==='') || (Number.isInteger(Number(s))===false)){
            throw new Error("Sorry! Only integers please!");
        }
        else {
            let mn = Number(s);
            if (mn<0){
                throw new Error("Sorry! No negatives please!");
            }
        }
    }

    catch(err) {return(err);}

    let m = Number(s);
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
