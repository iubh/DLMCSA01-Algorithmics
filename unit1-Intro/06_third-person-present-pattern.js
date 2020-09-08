let readline = require('readline-sync');

while (true){
    let m = '\nShort present tense sentence with a pronoun and a verb';
    m= m+'. Start with a capital letter but do not end with a dot\n';
    let t = readline.question(m);
    let pat3s = /^(He|She|It)\s([a-z]*)s$/;
    let patOp = /^(I|You|We|They)\s([a-z]*)[^s]$/;
    if ((t.search(pat3s)!==0)&&(t.search(patOp)!==0)){
        console.log('Sentence ' + t + ' is grammatically incorrect');
    }
    else{
        console.log('Sentence ' + t + ' is grammatically correct');
    }
}
