let readline = require('readline-sync');
let isPrime = function (n1) {
    if (n1>1){
        let r = true; let i = 2;
        while ((r===true) && (i<n1)){
            r = ((n1 % i) !== 0); i++;
        }
        return r;
    }
    else if (n1===1) {return(false)}
}
let strictlyPosInt = function(s){
    let n = Number(s);
    return((s!=='') && (Number.isInteger(n)) &&  (n>0))
}
while (true){
    let mess1 = '\nEnter a strictly positive integer ';
    let mess2 = 'Only strictly positive integers please!';
    let ns = readline.question(mess1);
    if (strictlyPosInt(ns)===true){
        let n = parseInt(ns);
        console.log('\n'+n+' is a prime number: '+isPrime(n));
    }
    else {console.log(mess2);}
}
