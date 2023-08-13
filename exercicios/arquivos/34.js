let pessoa1 = 'Matheus';
let pessoa2 = 'SUEHTAM';

function igualdade(string1, string2) {
    let quantidade = 0;
    for(i=0; i < string1.length; i++) {
        for(j=0; j < string2.length; j++) {
            if(string1[i].toUpperCase() == string2[j].toUpperCase()) {
                quantidade++
            }
        }
    }
    if(quantidade == string1.length  && quantidade == string2.length) {
        return true;
    } else {
        return false;
    }
}

console.log(igualdade(pessoa1, pessoa2));