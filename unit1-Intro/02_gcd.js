let readline = require('readline-sync');

let gcd =  function(n1, n2) {
  let r = Math.min(n1, n2);
  while ( !( ((n1%r)===0) && ((n2%r)===0) ) ) {r--;}
  return r;
}

let strictlyPosInt = function(s){
  let n = Number(s);
  return((s!=='') && (Number.isInteger(n)) &&  (n>0))
}

while (true){
  let mess1 = '\nEnter the first strictly positive integer ';
  let mess2 = 'Enter the second strictly positive integer ';
  let mess3 = 'Only strictly positive integers please!';
  let ns = readline.question(mess1);
  let ms = readline.question(mess2);
  if ((strictlyPosInt(ns)) && (strictlyPosInt(ms))){
    let n = parseInt(ns); let m = parseInt(ms);
    console.log('GCD between '+n+' and '+m+ ' is '+gcd(n,m));
  }
  else {console.log(mess3);}
}
