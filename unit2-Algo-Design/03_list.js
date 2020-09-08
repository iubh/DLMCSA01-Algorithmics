let readlineSync = require('readline-sync');

class ListNodeClass{
    constructor (e,newNode){
        this.valueInNode = e;
        this.NodeSucc = newNode;
    }

    getValueInNode(){
        return this.valueInNode;
    }

    getElementInPosition(p){
        let i = -1;
        let curr = new ListNodeClass(undefined,undefined);
        curr = this;
        while ((i<p) && (curr.NodeSucc !== undefined)){
            i++;
            curr = curr.NodeSucc;
        }
        if (i===p) {return (curr.valueInNode);}
        else {return undefined;}
    }

    putMeAtEndAfter(oldList){
        let curr = new ListNodeClass(undefined,undefined);
        curr = oldList;
        while (curr.NodeSucc !== undefined){
            curr = curr.NodeSucc;
        }
        curr.NodeSucc = this;
    }

    removeElementInPosition(p){
        let i = -1;
        let curr = new ListNodeClass(undefined,undefined);
        let prev = new ListNodeClass(undefined,undefined);
        curr = this;
        while ((i<p) && (curr.NodeSucc !== undefined)){
            i++;
            prev = curr;
            curr = curr.NodeSucc;
        }
        if (i===p){
            prev.NodeSucc = curr.NodeSucc;
        }
    }

    displayMe(){
        let txt = 'Displaying the list';
        txt = txt + '\nBeginning of the list';
        let currSucc = this.NodeSucc;
        while (currSucc !== undefined){
            if (currSucc.valueInNode !== undefined){
                txt = txt + '\n' + currSucc.valueInNode;
            }
            currSucc = currSucc.NodeSucc;
        }
        txt = txt + '\nEnd of the list ';     return(txt);
    }
}

class ListClass{
    constructor (c,l){
        this.cursor = c;
        this.list = l;
    }

    getValueOfCursor() {return this.cursor;}
    changeValueOfCursor(nc) {this.cursor = nc;}

    getElement() {
        return ((this.list).getElementInPosition(this.cursor));
    }

    removeCurrentElement(){
        (this.list).removeElementInPosition(this.cursor);
    }

    displayMe(){
        let txt = this.list.displayMe();
        txt = txt + '\nCurrent cursor value : ' + this.cursor;
        return(txt);
    }
}

let captureElements = function (n1){
    let rootNode = new ListNodeClass(undefined,undefined);
    let prevList = new ListNodeClass(undefined,undefined);
    prevList = rootNode;
    for (let i = 0; i < n1; i++){
        e = readlineSync.question('Please enter your next element ');
        let newNode = new ListNodeClass(e,undefined);
        newNode.putMeAtEndAfter(prevList);
    }
    return prevList;
}

let posInt = function(s){
    let n = Number(s);
    return((s!=='') && (Number.isInteger(n)) &&  (n>=0))
}

while(true){
    let mess1 = '\nPlease how many elements do you have? ';
    let mess2 = 'Only positive integers please!';
    let ns = readlineSync.question(mess1);
    if (posInt(ns)===true){
        let n = parseInt(ns);
        let ln = new ListNodeClass(undefined,undefined);
        ln = captureElements(n);
        let ls = new ListClass(0,ln);
        console.log(ls.displayMe());
        console.log('Current element: ' + ls.getElement() + '\n\n');
        let cp=parseInt(readlineSync.question('New position of cursor please? '));
        ls.changeValueOfCursor(cp);
        console.log(ls.displayMe());
        console.log('Current element: ' + ls.getElement() + '\n\n');
        cp=parseInt(readlineSync.question('Another position of cursor please? '));
        ls.changeValueOfCursor(cp);
        console.log(ls.displayMe());
        console.log('Current element: ' + ls.getElement() + '\n\n');
        ls.removeCurrentElement();
        console.log('\nElement at the current position has been removed!');
        console.log(ls.displayMe());
    }
    else {console.log(mess2);}
}
