let readlineSync = require('readline-sync');
class QueueNodeClass {
    constructor (e,newNode){
        this.valueInNode = e;
        this.NodeSucc = newNode;
    }
    getValueInNode() {return this.valueInNode;}
    getElementInPosition(p){
        let i = -1;
        let curr = new QueueNodeClass(undefined,undefined);
        curr = this;
        while ((i<p) && (curr.NodeSucc !== undefined)){
            i++; curr = curr.NodeSucc;
        }
        if (i===p) {return (curr.valueInNode);}
        else {return undefined;}
    }
    putMeAtEndAfter(oldQueue){
        let curr = new QueueNodeClass(undefined,undefined);
        curr = oldQueue;
        while (curr.NodeSucc !== undefined){
            curr = curr.NodeSucc;
        }
        curr.NodeSucc = this;
    }
    removeElementInPosition(p){
        let i = -1;
        let curr = new QueueNodeClass(undefined,undefined);
        let prev = new QueueNodeClass(undefined,undefined);
        curr = this;
        while ((i<p) && (curr.NodeSucc !== undefined)){
            i++; prev = curr; curr = curr.NodeSucc;
        }
        if (i===p) {prev.NodeSucc = curr.NodeSucc;}
    }
    displayMe(){
        let s = 'Displaying the queue';
        let currSucc = this.NodeSucc;
        while (currSucc !== undefined){
            if (currSucc.valueInNode !== undefined){
                s = s + " <---- " + currSucc.valueInNode;
            }
            currSucc = currSucc.NodeSucc;
        }
        return(s);
    }
}

class NpQueueClass{
    constructor (npqp){
        this.queue = npqp;
    }
    getElement(){
        return ((this.queue).getElementInPosition(0));
    }
    removeCurrentElement(){
        (this.queue).removeElementInPosition(0);
    }
    displayMe(){
        return(this.queue.displayMe());
    }
}
let captureElements = function (n1){
    let rootNode = new QueueNodeClass(undefined,undefined);
    let prevQueue = new QueueNodeClass(undefined,undefined);
    prevQueue = rootNode;
    let mess = 'Please enter your next element ';
    for (let i = 0; i < n1; i++){
        let e = readlineSync.question(mess);
        let newNode = new QueueNodeClass(e,undefined);
        newNode.putMeAtEndAfter(prevQueue);
    }
    return prevQueue;
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
        let npqn = new QueueNodeClass(undefined,undefined);
        npqn = captureElements(n);
        let npq = new NpQueueClass(npqn);
        console.log(npq.displayMe());
        console.log('\nLet us remove first element of the queue');
        npq.removeCurrentElement(); console.log(npq.displayMe());
        console.log('\nLet us remove one more element of the queue');
        npq.removeCurrentElement(); console.log(npq.displayMe());
    } else {console.log(mess2);}
}
