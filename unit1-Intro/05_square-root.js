let readline = require('readline-sync');

let squRt = function (n1,d1){
    if ((n1>=0) && (d1>=0)) {
        return (Math.sqrt(n1)).toFixed(d1);
    }
}

let posInt = function(s){
    let n = Number(s);
    return((s!=='') && (Number.isInteger(n)) && (n>=0))
}

while (true){
    let mess1 = '\nEnter a positive integer ';
    let mess2 = 'Required number of digits after dot ';
    let mess3 = 'Only positive integers please!';
    let nt = readline.question(mess1);
    let mt = readline.question(mess2);
    if ((posInt(nt)) && (posInt(mt))){
        let n = parseInt(nt);
        let d = parseInt(mt);
        let r = squRt(n,d);
        let ms = 'Square root of ' + n;
        ms = ms + ' with ' + d + ' digits after dot: ' + r;
        console.log(ms + ' whose square is ' + (r*r) );
    }
    else{
        console.log(mess3);
    }
}
