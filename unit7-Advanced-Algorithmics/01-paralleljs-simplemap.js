let Parallel = require('paralleljs');
let lst = [1, 3, 5, 7];
let p = new Parallel(lst);
let log = function () {console.log(arguments[0]);};
let cubeOperation = function (n) {return n*n*n;};
p.map(cubeOperation).then(log);
