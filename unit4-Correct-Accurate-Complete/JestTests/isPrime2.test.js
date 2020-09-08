const isPrime2 = require('./isPrime2');

test('throws for abc as non integer', () => {
    expect(() => {
        isPrime2('abc');
    }).toThrowError(new Error ('Sorry Only Integers'));
});

test('throws for 10.3 as non integer', () => {
    expect(() => {
        isPrime2('10.3');
    }).toThrowError(new Error ('Sorry Only Integers'));
});

test('throws for -7 as negative integer', () => {
    expect(() => {
        isPrime2('-7');
    }).toThrowError(new Error ('Sorry Positives Only'));
})
