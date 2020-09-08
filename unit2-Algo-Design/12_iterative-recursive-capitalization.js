let readline = require('readline-sync');
let cpI = function (s1) {
    if (s1.length>0) {let r = "";
        for (let i=0; i<s1.length; i++){r = r+s1[i].toUpperCase();}
        return r;
    }
}
let cpR = function (s1){
    if (s1.length>0){
        if (s1.length===1) {return s1[0].toUpperCase();}
        else {
            return((s1[0].toUpperCase())+cpR(s1.substring(1,s1.length)));
        }
    }
}
while (true){
    let s = readline.question('\nEnter a string ');
    let i = cpI(s); let r = cpR(s);
    let o = 'Capitalizing '+s+'. Iterative: '+i+'; Recursive: '+r;
    console.log(o);
}
