let readlineSync = require('readline-sync');

class PQueueNodeClass {
    constructor (e,pr,newNode){
        this.valueInNode = e;
        this.priority = pr;
        this.NodeSucc = newNode;
    }
    getValueInNode() {return this.valueInNode;}
    getPriority() {return this.priority;}
    getPriorityPosition(){
        let curr = new PQueueNodeClass(undefined,undefined,undefined);
        curr = this;
        if (curr.NodeSucc === undefined){return -1;} else {
            curr = curr.NodeSucc; let hprl = curr.priority;
            let i = 0; let prp = i;
            while (curr.NodeSucc !== undefined){
                i++; curr = curr.NodeSucc;
                if (curr.priority<hprl){hprl=curr.priority; prp=i;}
            } return prp;
        }
    }
    getElementInPosition(p){
        let curr = new PQueueNodeClass(undefined,undefined,undefined);
        curr = this; let i = -1;
        while ((i<p) && (curr.NodeSucc !== undefined)){
            i++; curr = curr.NodeSucc;
        }
        if (i===p){return(curr.valueInNode);} else {return undefined;}
    }
    getPriorityInPosition(p){
        let curr = new PQueueNodeClass(undefined,undefined,undefined);
        curr = this; let i = -1;
        while ((i<p) && (curr.NodeSucc !== undefined)){
            i++; curr = curr.NodeSucc;
        }
        if (i===p){return (curr.priority);} else {return undefined;}
    }
    putMeAtEndAfter(oldQueue){
        let curr = new PQueueNodeClass(undefined,undefined,undefined);
        curr = oldQueue;
        while (curr.NodeSucc !== undefined) {curr = curr.NodeSucc;}
        curr.NodeSucc = this;
    }

    removeElementInPosition(p){
        if (p !== -1){
            let curr=new PQueueNodeClass(undefined,undefined,undefined);
            let prev=new PQueueNodeClass(undefined,undefined,undefined);
            curr = this; let i = -1;
            while ((i<p) && (curr.NodeSucc !== undefined)){
                i++; prev = curr; curr = curr.NodeSucc;
            }
            if (i===p) {prev.NodeSucc = curr.NodeSucc;}
        }
    }
    displayMe(){
        let s = 'Displaying the queue';
        let currSucc = this.NodeSucc;
        while (currSucc !== undefined){
            if (currSucc.valueInNode !== undefined){
                s=s+'<----('+currSucc.getValueInNode()+':'+currSucc.priority+')';
            }
            currSucc = currSucc.NodeSucc;
        }
        return(s);
    }
}
class PQueueClass {
    constructor (pqp) {
        this.queue = pqp;
    }
    getElement() {return ((this.queue).getElementInPosition(0));}
    removeCurrentElement(){(this.queue).removeElementInPosition(0);}
    getHighestPriorityElement(){
        let hprp = (this.queue).getPriorityPosition();
        return ((this.queue).getElementInPosition(hprp));
    }
    getPriorityLevelOFHighestPriorityElement(){
        let hprp = (this.queue).getPriorityPosition();
        return ((this.queue).getPriorityInPosition(hprp));
    }
    removeHighestPriorityElement(){
        let hprp = (this.queue).getPriorityPosition();
        (this.queue).removeElementInPosition(hprp);
    }
    displayMe() {return(this.queue.displayMe());}
}

let captureElements = function (n1) {
    let rootNode=new PQueueNodeClass(undefined,undefined,undefined);
    let prevQueue=new PQueueNodeClass(undefined,undefined,undefined);
    prevQueue=rootNode; let mess = 'Please enter your next element ';
    for (let i = 0; i < n1; i++){
        let prtl = Math.floor((Math.random() * 100) + 1);
        let e = readlineSync.question(mess);
        let newNode = new PQueueNodeClass(e,prtl,undefined);
        newNode.putMeAtEndAfter(prevQueue);
    } return prevQueue;
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
        let pqn = new PQueueNodeClass(undefined,undefined,undefined);
        pqn = captureElements(n); let pq = new PQueueClass(pqn);
        console.log(pq.displayMe());
        console.log('\nLet us remove first element of the queue');
        pq.removeCurrentElement(); console.log(pq.displayMe());
        let pl = pq.getPriorityLevelOFHighestPriorityElement();
        console.log('\nHighest priority element');
        console.log(pq.getHighestPriorityElement()+' Priority no '+ pl);
        console.log('\nLet us remove highest priority element');
        pq.removeHighestPriorityElement();console.log(pq.displayMe());
        console.log('\nLet us remove first element of the queue');
        pq.removeCurrentElement(); console.log(pq.displayMe());
    } else {console.log(mess2);}
}
