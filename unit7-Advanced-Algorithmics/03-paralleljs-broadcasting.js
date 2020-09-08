let readlineSync = require('readline-sync');
let Parallel = require('paralleljs');
let assert = require('assert');

let log = function(){
    console.log('Result column after column');
    console.log(arguments[0]);
}

let printMatr = function (A){
    for (let r=0;  r<A.length; r++){
        let rs = "";
        if (r!==0) {rs = '\n';}
        for (let c=0; c<A[r].length; c++){
            if (c===0) {rs = rs + A[r][c];}
            else {rs = rs + "   " + A[r][c];}
        }
        console.log(rs);
    }
}

function leftMatr(){
    return([[0,1,2,3,4],[5,6,7,8,9],[1,2,3,4,5]]);
}

let multByLeftMatr = function(C){
    let P = new Array(); let L = new Array(); L = leftMatr();
    let s = 0;
    for (let i=0; i<L.length; i++){
        s=0;
        for (let j=0; j<C.length; j++){
            s = s + (L[i][j]*C[j]);
        }
        P.push(s);
    }
    return P;
}

console.log('Multiplying the left matrix below with yours');
printMatr(leftMatr());
let mess1 = 'Nb of columns of your matrix please : ';
let lc = (leftMatr()[0]).length;
let mess2 = lc + ' values separated by commas please : ';

let cn = parseInt(readlineSync.question(mess1));
let cols = new Array();
for (let i=0; i<cn; i++){
    let col = new Array();
    let mess3 = 'For column no' + (i+1) + ' , ' + mess2;
    col = (readlineSync.question(mess3)).split(',');
    assert(lc===col.length, lc.toString() + " values please!");
    cols.push(col);
}

let r = new Parallel(cols);

r.require(leftMatr).map(multByLeftMatr).then(log);
