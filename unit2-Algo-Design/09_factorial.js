let readline = require('readline-sync');
let factIter = function(n1) {
    if (n1>=0) {
        let r = 1;
        for (let i=1; i<=n1; i++) {r = r * i;}
        return r;
    }
}
let factRec = function (n1){
    if (n1>=0) {
        if ((n1===0) || (n1===1)) {return 1;}
        else {return (n1 * factRec(n1-1));}
    }
}
while (true){
    let mess='\nPositive integer please ';
    let s = readline.question(mess);
    let n = Number(s);
    if (((s!=='') && (Number.isInteger(n)) &&  (n>=0)) === true)
    {
        n=parseInt(s);
        let i=factIter(n);
        let r=factRec(n);
        let ms='Factorial of '+n+' iterative is '+i+'; recursive is '+r;
        console.log(ms);
    }
}
