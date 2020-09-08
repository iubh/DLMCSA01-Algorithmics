let read = require('readline-sync');
const lineReader = require('n-readlines');

let midRangeV0 = function (Ar,epsi) {
    let n = Ar.length; let lb = ((1-epsi)*n)/2;
    let hb = ((1+epsi)*n)/2; let r = Math.floor(Math.random()*n);
    let x = Ar[r]; let k = 1;
    for (let i=0; i<n; i++){if(Ar[i] < x){k++;}}
    if ((k >= lb) && (k<=hb)){return k;} else{return undefined;}
}

let midRangeV = function(Ar,epsi,nmaxt){
    let r = midRangeV0(Ar,epsi); let c = 1;
    while((r===undefined) || (c<nmaxt)){r=midRangeV0(Ar,epsi); c++;}
    return r;
}

let readFile = function(tfn){
    const lrdr = new lineReader(tfn); let line; let s = "";
    let Ar = new Array(); Ar = [];
    while (line = lrdr.next()){
        s = line.toString('ascii');
        if (s[s.length-1]==='\n'){Ar.push(Number((s.slice(0, -1))));}
        else {Ar.push(Number(s));}
    }
    return Ar;
}

let tf=read.question('Text file name please: ');

while (true){
    let epss=read.question('\nStrictly positive epsilon please: ');
    if ((epss!=='') && (Number(epss)>0)){
        let A = new Array(); A = readFile(tf); let lNo = A.length;
        let eps = Number(epss); let lbo = ((1-eps)*lNo)/2;
        let hbo = ((1+eps)*lNo)/2;
        console.log('Epsilon: '+eps+' Mid range: ['+lbo+' , '+hbo+']');
        let r1 = midRangeV0(A,eps);
        let ms = 'Rank and value found after attempt ';
        console.log(ms + ' 1 : ' + r1 +' , ' + A[r1]);
        if (r1 === undefined){
            let r2 = midRangeV(A,eps,10);
            console.log(ms + ' 10 or even less : '+r2+' , '+A[r2]);
        }
    }
}
