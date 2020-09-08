let readline = require('readline-sync');

let sum = function (n){
    if (n>=0) {
        let i = 0; let s = 0; for (let i=1; i<=n; i++){s = s + i;}
        return s;
    }
}

while (true){
    let ms = readline.question("A whole number please: ");
    let v = Number(ms);
    if ((ms!=='') && (Number.isInteger(v)) && (v>=0)){
        let m = parseInt(ms); let sm = sum(m); let o = 'first whole';
        console.log('The '+(m+1)+' '+o+' numbers added : '+sm+'\n');
    }
}
