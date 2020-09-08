let isPrime2 = function (s) {
    if ((s=='')||(Number.isInteger(Number(s)))===false){
        throw new Error('Sorry Only Integers');
    }
    else{
        m=Number(s)
        if (m<0){
            throw new Error('Sorry Positives Only');
        }
    }
    let d = true;
    if (m===2) {d = false;}
    if (m>=3){
        let i = 2; d = ((m % i) === 0);
        while ((d===false) && (i<m-1)){i++; d = ((m % i) === 0);}
    }
    return !d;
}
module.exports = isPrime2;
