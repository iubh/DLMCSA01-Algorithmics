let readline = require('readline-sync');
let capIter = function (s1) {
    if (s1.length>0) {
        let r = "";
        for (let i=0; i<s1.length; i++){
            r = r + s1[i].toUpperCase();
        }
        return r;
    }
}
while (true){
    let s = readline.question('\nEnter a string ');
    let ci = capIter(s);
    let ms = 'Capitalization of '+s+' iterative is '+ci;
    console.log(ms);
}
