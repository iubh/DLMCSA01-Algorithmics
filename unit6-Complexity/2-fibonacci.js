let read = require('readline-sync');

let usualFib = function (n){
    if (n>=0){
        if (n===0){return(0);}
        if (n===1){return(1);}
        if (n>=2){
            let fp = 0; let fi = 1;
            for (let i = 2; i <= n; i++) {
                let f = fi; fi=fp+fi; fp = f;
            }
            return(fi);
        }
    }
}

let multMatr = function (a,b){
    let c = new Array(4);
    c[0]=(a[0]*b[0]) + (a[1]*b[2]); c[1]=(a[0]*b[1]) + (a[1]*b[3]);
    c[2]=(a[2]*b[0]) + (a[3]*b[2]); c[3]=(a[2]*b[1]) + (a[3]*b[3]);
    return (c);
}

let powerMatr = function (m, n){
    if (n>=1){
        if (n===1) {return m;}
        if (n>1){
            if((n%2)===0){let m1=powerMatr(m,n/2);return multMatr(m1,m1);}
            if ((n%2)!==0) {let m1 = powerMatr(m,(n-1)/2);
                return multMatr(multMatr(m1,m1),m);
            }
        }
    }
}

let fastFib = function (n){
    if (n>=0){
        if (n===0) {return 0;}
        if (n>=1) {let mf = [1, 1, 1, 0]; let mp = powerMatr(mf, n);
            return mp[1];
        }
    }
}

let powerMatrI = function (m, n){
    if (n>=1){
        if (n===1) {return m;}
        if (n>1){
            let s = new Array(); let i = n;
            while(i>1){
                if ((i%2)===0) {s.push(1); i=i/2;}
                else {s.push(2); i=(i-1)/2;}
            }
            let mp = new Array(4); mp[0] = m[0]; mp[1] = m[1];
            mp[2] = m[2]; mp[3] = m[3];
            while((s.length)>0){
                i = s.pop(); if (i===1) {mp = multMatr(mp, mp);}
                if (i===2) {mp = multMatr(multMatr(mp, mp), m);}
            }
            return(mp);
        }
    }
}

let fastFibI = function (n){
    if (n>=0){
        if (n===0) {return 0;}
        if (n>=1){
            let mf=[1, 1, 1, 0]; let mp=powerMatrI(mf, n); return mp[1];
        }
    }
}

while (true){
    let s = read.question('\nInput sequence size (Integer >= 0) ');
    let n = Number(s);
    if ((s!=='') && (Number.isInteger(n)) &&  (n>=0)){
        let m = parseInt(s); let ms = ' Algorithm. Fibonacci number F';
        console.log('Usual' + ms + m +' : ' + usualFib(m));
        console.log('Recursive Fast' + ms + m +' : ' + fastFib(m));
        console.log('Iterative Fast' + ms + m +' : ' + fastFibI(m));
    }
}
