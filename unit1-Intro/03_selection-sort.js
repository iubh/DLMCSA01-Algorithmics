let readline = require('readline-sync');
//Function to get the numbers
let captureNumbers = function (n1,nbs){
    let i=0;
    while(i < n1){
        let mess = 'Please enter your next number ';
        let v = readline.question(mess);
        if ((isNaN(v)===false) && (v!=='')){
            nbs.push(Number(v));
            i++;
        }
    }
    return;
}

let displayNumbers = function (mess, nbs){
    console.log(mess);
    console.log(nbs);
    return;
}

let sortNumbers = function (nbs){
    for (let i = 0; i < nbs.length; i++){
        for (let j = i; j < nbs.length; j++){
            if (nbs[j]<nbs[i]){
                v = nbs[i];
                nbs[i] = nbs[j];
                nbs[j] = v;
            }
        }
    }
    return;
}

let strictlyPosInt = function(s){
    let n = Number(s);
    return((s!=='') && (Number.isInteger(n)) &&  (n>0))
}

while (true){
    let numbs = [];
    let mess = '\nPlease how many numbers do you have? ';
    let ns = readline.question(mess);
    if (strictlyPosInt(ns)===true){
        let n = parseInt(ns);
        captureNumbers(n,numbs);
        displayNumbers("Unsorted sequence of numbers",numbs);
        sortNumbers(numbs);
        displayNumbers("Sorted sequence of numbers", numbs);
    }
}
