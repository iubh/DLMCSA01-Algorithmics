let readlineSync = require('readline-sync');

let palin = function (ss){
    let s=ss.toUpperCase(); let n=s.length; let pl=true; let i=0;
    while ((i<n/2) && (pl === true)) {pl = (s[i]===s[(n-1)-i]); i++;}
    return(pl);
}
while(true){
    let t = readlineSync.question('\nPlease type something : ');
    console.log('It is ' + palin(t)+' that ' + t + ' is a palindrome');
}
