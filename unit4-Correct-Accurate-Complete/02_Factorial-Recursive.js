let readline = require('readline-sync');
let facto = function (m){
    if (m>=0){
        if (m===0){let f = 1;return f;}
        else {let f = m*facto(m-1); return f;}
    }
}

while (true){
    let ms = readline.question("A whole number please: ");
    let v = Number(ms);
    if ((ms!=='') && (Number.isInteger(v)) && (v>=0)){
        let n = parseInt(ms); let fn = facto(n);
        console.log(n + ' factorial is: ' + fn + '\n');
    }
}
