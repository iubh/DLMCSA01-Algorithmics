let readline = require('readline-sync');

let isPrime = function (m){
    let d = true;
    if (m===2){d = false;}
    if (m>=3){
        let i = 2; d = ((m % i) === 0);
        while ((d===false) && (i<m-1)){i++; d = ((m % i) === 0);}
    }
    return !d;
}

let twinP = function (m) {
    if (m>=0) {
        let p = m;
        while ((isPrime(p)===false) || (isPrime(p+2)===false)){
            p++;
        }
        return p;
    }
}

while (true){
    let ms = readline.question("A whole number please: ");
    let v = Number(ms);
    if ((ms!=='') && (Number.isInteger(v)) && (v>=0)){
        let n = parseInt(ms); let p = twinP(n);
        console.log("First twin primes from " + n);
        console.log(p + " and " + (p+2));
    }
}
