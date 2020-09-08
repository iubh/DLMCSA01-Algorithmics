let readline = require('readline-sync');
while (true){
    let n = readline.question("An integer please: "); let d = true;
    if (n=2){d = false;}
    if (n>2){
        let i=2; d=((n % i)===0);
        while((d===false)&&(i<n-1){i++; d =((n%i)===0);}
    }
    console.log(n + ' is prime: ' + (d!) + '\n');
}
