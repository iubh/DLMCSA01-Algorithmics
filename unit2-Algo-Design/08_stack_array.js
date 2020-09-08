let readline = require('readline-sync');
class ArrStack {
    constructor() {this.myArray = new Array();}
    putMeOnTopOf(t) {(this.myArray).push(t);}
    removeMyTop() {this.myArray.pop();}
    displayMe(){
        let txt = 'Displaying the stack';
        txt = txt + '\n' +  'Top of the stack';
        let tp = ((this.myArray).length)-1;
        while (tp >= 0){
            txt = txt + '\n' +  this.myArray[tp]; tp--;
        }
        return( txt + '\n' + 'Bottom of the stack');
    }
    getTopElement() {
        let tp = ((this.myArray).length)-1;
        return this.myArray[tp];
    }
}
let captureElements = function (s1,n1) {
    let mess = 'Please enter your next element ';
    for (let i = 0; i < n1; i++) {
        let e = readline.question(mess);
        s1.putMeOnTopOf(e);
    }
}
while (true){
    let mess = '\nPlease how many elements do you have? ';
    let n = parseInt(readline.question(mess));
    let s = new ArrStack();
    captureElements(s,n); console.log(s.displayMe());
    s.removeMyTop();
    console.log('One element removed from the stack');
    console.log(s.displayMe());
}
