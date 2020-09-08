let readline = require('readline-sync');
class NodeClass {
    constructor (top,prevNode){
        this.topElement = top;
        this.prevTopNode = prevNode;
    }

    getTopElement(){
        return this.topElement;
    }

    putMeOnTopOf(oldTopNode){
        this.prevTopNode = oldTopNode;
    }

    removeMyTop(){
        if (this.prevTopNode !== undefined){
            this.topElement = (this.prevTopNode).topElement;
            this.prevTopNode = (this.prevTopNode).prevTopNode;
        }
        else{
            this.topElement = undefined;
            this.prevTopNode = undefined;
        }
    }

    displayMe(){
        let txt = 'Displaying the stack';
        txt = txt + '\nTop of the stack';
        let currTopEl = this.topElement;
        let currPredNode = this.prevTopNode;
        while (currTopEl !== undefined){
            txt = txt + '\n' + currTopEl;
            if (currPredNode !== undefined){
                currTopEl = currPredNode.topElement;
                currPredNode = currPredNode.prevTopNode;
            }
            else {currTopEl = undefined;}
        }
        txt = txt + '\nBottom of the stack\n';
        return(txt);
    }
}

let captureElements = function (n1){
    let oldStack = new NodeClass(undefined,undefined);
    let finalStack = new NodeClass(undefined,undefined);
    let mess = 'Please enter your next element ';
    for (let i = 0; i < n1; i++){
        let e = readline.question(mess);
        let newNode = new NodeClass(e,undefined);
        newNode.putMeOnTopOf(oldStack);
        oldStack = newNode;
        finalStack = newNode;
    }
    if (n1>0){return finalStack;}
    else {return oldStack;}
}

let posInt = function(s){
    let n = Number(s);
    return((s!=='') && (Number.isInteger(n)) &&  (n>=0))
}

while (true){
    let mess1 = '\nPlease how many elements do you have? ';
    let mess2 = 'Only positive integers please!';
    let ns = readline.question(mess1);
    if (posInt(ns)===true){
        let n = parseInt(ns);
        let s = new NodeClass(undefined,undefined);
        s = captureElements(n);
        console.log('\nCurrent stack');
        console.log(s.displayMe());
        s.removeMyTop();
        console.log('\nOne element removed from the stack');
        console.log(s.displayMe());
    }
    else {console.log(mess2);}
}
