const isPrime1 = require('./isPrime1');

for (let i=0; i<17; i++){
    let r = false;
    if ((i===2)||(i===3)||(i===5)||(i===7)||(i===11)||(i===13)){
        r = true;
    }
    let t = isPrime1(i.toString());
    test('Check primality of ' + i + ' as ' + r, () => {
        expect(t).toBe(r);
    });
}
