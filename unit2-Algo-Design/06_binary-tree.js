let readlineSync = require('readline-sync');

class BinTreeClass {
    constructor (lev) {
        this.levels = lev;
        this.slots = [];
    }
    getTTNbOfElements(){
        let pw = Math.pow(2,this.levels);
        let space = (Math.floor(pw))-1;
        return space;
    }
    initializeBinTree(){
        let n = this.getTTNbOfElements();
        for(let i=1; i<=n; i++){this.slots.push(undefined);}
    }
    getElementInNode(p) {
        if((p>=0)&&(p<(this.slots).length)){return this.slots[p];}
        else {return undefined;}
    }
    putElementInNode(e,cp){
        if (cp===0){this.slots[cp] = e;}
        else {
            if ((cp>0) && (cp<(this.slots).length)){
                let parPos = 0;
                if ((cp%2)===0){parPos=(Math.floor(cp/2))-1;}
                else {parPos = Math.floor((cp-1)/2);}
                if (this.getElementInNode(parPos)!==undefined){
                    this.slots[cp] = e;
                }
            }
        }
    }
    displayMe(){
        let s = 'Displaying the tree\n';
        for (let i = 0; i<(this.slots).length; i++) {
            if (((this.slots)[i]) !== undefined){
                s = s + '| |' + i + ': ' + ((this.slots)[i]);
            }
        }
        return(s + '| |');
    }
}
    let captureElements = function (bt,n1){
        let m = bt.getTTNbOfElements()-1;
        let mess1 = 'Node position between 0 and ' + m + ' please ';
        let mess2 = 'Node element please? ';
        for (let i = 0; i < n1; i++){
            let myp = parseInt(readlineSync.question(mess1));
            let e = readlineSync.question(mess2);
            bt.putElementInNode(e,myp);
        }
    }

let posInt = function(s){
    let n = Number(s);
    return((s!=='') && (Number.isInteger(n)) &&  (n>=0))
}

while(true){
    let ms0='\nRoot of the binary tree: Position 0';
    let ms1='Left child of the root: Position 1';
    let ms2='Right child of the root: Position 2';
    let ms3='Left child of the left child of the root: Position 3';
    let ms4='And so on';
    console.log(ms0);
    console.log(ms1);
    console.log(ms2);
    console.log(ms3);
    console.log(ms4);
    let mess1 = '\nPlease how many levels do you have? ';
    let mess3 = 'Only positive integers please!';
    let ns = readlineSync.question(mess1);
    if (posInt(ns)===true){
        let n = parseInt(ns);
        let btn = new BinTreeClass(n);
        let nm = btn.getTTNbOfElements();
        let mess2='Number of non empty nodes between 1 and '+nm+' ';
        let ms = readlineSync.question(mess2);
        if (posInt(ms)===true){
            let m = parseInt(ms);
            if ((m>0)&&(m<=nm)){
                btn.initializeBinTree();
                captureElements(btn,m);
                console.log(btn.displayMe());
            } else {console.log('Too few or too many nodes!')}
        } else {console.log(mess3);}
    } else {console.log(mess3);}
}
