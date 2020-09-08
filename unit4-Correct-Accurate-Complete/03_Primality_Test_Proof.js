let isPrime = function (m){
    let d = true;
    if (m===2){d = false;}
    if (m>=3){
        let i = 2; d = ((m % i) === 0);
        while ((d===false) && (i<m-1)){
            i++; d = ((m % i) === 0);
        }
    }
    return !d;
}
