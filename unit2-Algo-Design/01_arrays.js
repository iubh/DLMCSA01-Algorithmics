let readline = require('readline-sync');

let captureElements = function (n,m,arr){
    let mess = 'Please enter your next element ';
    for (let i = 0; i < n; i++) {
        arr[i] = readline.question(mess);
    }
    for (let i = 0; i < m; i++){
        arr.push(readline.question(mess));
    }
}

let displayArray = function (mess, arr){
    console.log(mess);
    console.log(arr);
}

let posInt = function(s){
    let n = Number(s);
    return((s!=='') && (Number.isInteger(n)) &&  (n>=0))
}

while(true){
    let mess1 = '\nInitial size of the array please ';
    let mess2 = 'How many additional elements please? ';
    let mess3 = 'Only positive integers please!';
    let ns = readline.question(mess1);
    let ms = readline.question(mess2);
    if ((posInt(ns)) && (posInt(ms))){
        let n1 = parseInt(ns);
        let arr1 = new Array(n1);
        let n2 = parseInt(ms);
        captureElements(n1,n2,arr1);
        displayArray('Content of the array',arr1);
    }
    else{
        console.log(mess3);
    }
}
