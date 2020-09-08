let readline = require('readline-sync');

let cutBlocks = function (s){
    let bl = new Array();
    let be = 0;
    let ct = 1;
    for (let i=1; i<s.length; i++){
        if (s[i] === s[be]){
            ct++;
        }
        else{
            bl.push(s[be]);
            bl.push(ct);
            be = i;
            ct = 1;
        }
    }
    bl.push(s[be]);
    bl.push(ct);
    return(bl);
}

let codeLength = function (bls){
    let r = 0;
    let i = 1;
    while(i<bls.length){
        if (bls[i] > r){
            r = bls[i];
        }
        i=i+2;
    }
    return((binarise(r)).length);
}

let completeZeros = function (s1,n1){
    let r = "";
    for (let i=0; i<n1-(s1.length); i++){
        r = '0' + r;
    }
    return (r+s1);
}

let binarise = function (n1){
    return (n1 >>> 0).toString(2);
}
let codeBlocks = function (bls){
    let l = codeLength(bls);
    let r = "";
    let i = 0;
    while(i<bls.length){
        let s = binarise(bls[i+1]);
        let z = completeZeros(s,l);
        r = r + bls[i] + z;
        i=i+2;
    }
    return(r);
}

let isBinary = function (s){
    let i = 0;
    while ((i<s.length)&&((s.charAt(i)==='0')||(s.charAt(i)==='1')))
    {i++;}
    return (i===s.length);
}

while (true){
    let mess = '\nEnter a binary number ';
    let b = readline.question(mess);
    if ((b.length!==0) && (isBinary(b)===true)){
        let blcs = new Array();
        blcs = cutBlocks(b);
        let cl = codeLength(blcs);
        let rle = codeBlocks(blcs);
        console.log('The initial binary is: ' + b);
        console.log('The blocks of are: ' + blcs);
        console.log('Length of the binary of longest block  is: '+cl);
        console.log('The RLE code is: ' + rle);
    }
}
