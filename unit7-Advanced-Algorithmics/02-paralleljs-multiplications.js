let readlineSync = require('readline-sync');
let Parallel = require('paralleljs');
let pairRoAndColValues = function(ro,cl){
    let rcpa = new Array();
    for (let i=0; i<ro.length; i++){
        let rcv = {rowV: Number(ro[i]),colV: Number(cl[i]),}
        rcpa.push(rcv);
    }
    return(rcpa);
}
let pMultRC = function(xy) {return((xy.rowV)*(xy.colV));}
let log = function () {console.log(arguments[0]);}
let row = new Array(); let col = new Array();
let mess = 'values separated by commas please: ';
row = (readlineSync.question('Row ' + mess)).split(',');
col = (readlineSync.question('Column ' + mess)).split(',');

if (row.length === col.length){
    let rcpairs = new Array(); rcpairs = pairRoAndColValues(row,col)
    console.log('Row and column paired'); console.log(rcpairs);
    let p = new Parallel(rcpairs);
    console.log('Pairwise multiplication of the row and the column');
    p.map(pMultRC).then(log);
}
else {
    console.log('Rows and columns with different nb of elements');
}
