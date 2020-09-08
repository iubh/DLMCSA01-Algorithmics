let readlineSync = require('readline-sync');

class GraphClass {
    constructor (nbn) {
        this.nbOfNodes = nbn;
        this.nodesNames = [];
        this.weights = [];
    }
    getNbOfNodes(){return this.nbOfNodes;}
    initializeGraph(){
        let n = this.getNbOfNodes();
        for (let i=0; i<n; i++){
            this.nodesNames.push(undefined);
            let w = [];
            for (let j=0; j<n; j++){w.push(undefined);}
            this.weights.push(w);
        }
    }
    getElementInNode(p){
        if ((p>=0) && (p<(this.nodesNames).length)){
            return this.nodesNames[p];
        } else {return undefined;}
    }
    putElementInNode(e,p){
        if ((p>=0) && (p<(this.nodesNames).length)){
            this.nodesNames[p] = e;
        }
    }
    putWeightBtwNodes(w,o,d){
        let n = this.getNbOfNodes();
        let c1 = ((o>=0) && (o<n));
        let c2 = ((d>=0) && (d<n));
        if (c1 && c2){this.weights[o][d] = w;}
    }
    displayNames(){
        let s = 'Displaying the names\n';
        let n = this.getNbOfNodes();
        for (let i=0; i<n; i++){
            if (((this.nodesNames)[i]) !== undefined) {
                s = s + i + ' : ' + ((this.nodesNames)[i]) + '\n';
            }
        }
        return(s.slice(0,-1));
    }
    displayWeights(){
        let s = 'Displaying the weights\n';
        let n = this.getNbOfNodes();
        for (let i=0; i<n; i++){
            //s = s + "\n";
            for (let j=0; j<n; j++){
                if (((this.weights)[i][j]) !== undefined){
                    s=s+'.('+i+'->'+j+' : '+((this.weights)[i][j])+').';
                }
            }
        }
        return(s.slice(0,-1));
    }
}
let captureNames = function (g){
    let mess1 = 'Node position please? ';
    let n1 = g.getNbOfNodes();
    let mess = 'Name of node number ';
    for (let i = 0; i < n1; i++) {
        let e = readlineSync.question(mess + i + ' please? ');
        g.putElementInNode(e,i);
    }
}
let captureWeights= function (m,g){
    let mess1 = ' origin position? ';
    let mess2 = ' destined position ';
    let mess3 = 'Weight between the two nodes please? ';
    for (let i = 1; i <= m; i++) {
        orp = parseInt(readlineSync.question("Weight " + i + mess1));
        dsp = parseInt(readlineSync.question("Weight " + i + mess2));
        let wgt = readlineSync.question(mess3);
        g.putWeightBtwNodes(wgt,orp,dsp);
    }
}
while(true){
    let ms1 = '\nPlease how many nodes do you have? ';
    let ms2 = 'How many weights please? ';
    let n = parseInt(readlineSync.question(ms1));
    let grp = new GraphClass(n);
    grp.initializeGraph();
    captureNames(grp);
    console.log(grp.displayNames());
    let m = parseInt(readlineSync.question(ms2));
    captureWeights(m,grp);
    console.log(grp.displayWeights());
}
