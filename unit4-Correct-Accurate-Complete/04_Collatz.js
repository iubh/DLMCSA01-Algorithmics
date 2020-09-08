let readline = require('readline-sync');

let collatz = function (n1){
    if (n1>0){
        let m = n1; let c = new Array(); c.push(m);
        while (m!==1) {
            if ((m%2)===0){m = m / 2;} else {m = (3*m) + 1;}
            c.push(m);
        }
        c.push(4,2,1);
        return c;
    }
}

while (true){
    let mes = "\nA strictly positive integer please: ";
    let s = readline.question(mes); let n = Number(s);
    if (((s!=='') && (Number.isInteger(n)) && (n>=1))===true){
        n = parseInt(s); let cn = new Array(); cn = collatz(n);
        console.log("Collatz sequence of " + n);
        console.log(cn);
        console.log("Sequence's length: " + cn.length);
    }
}
