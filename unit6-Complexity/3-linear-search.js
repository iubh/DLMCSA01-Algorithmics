let r = require('readline-sync');

let captureElements = function (n, a){
    for(let i=0;i<n;i++){a.push(r.question('Next element please? '));}
}

let findPosition = function (e, a){
    let n = a.length; let i = 0;
    while ((i<n) && (a[i]!==e)) {i++;}
    if ((i<a.length)&&(a[i]===e)) {return (i);} else {return (-1);}
}

while (true){
    let s = r.question('\nNb of elements? '); let n = Number(s);
    if ((s!=='') && (Number.isInteger(n)) && (n>0)){
        let m=parseInt(s); let ar=new Array(); captureElements(m, ar);
        console.log('Sequence captured ' + ar);
        let es = r.question('Element searched please? ');
        let p = findPosition(es, ar);
        console.log('Position of ' + es + ' in the sequence ' + p);
    }
}
