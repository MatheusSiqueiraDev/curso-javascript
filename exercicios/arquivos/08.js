const string = '10 20 20 8 25 3 0 30 1';
const newString = string.split(' ');

function melhorPiorDesempenho(pontos) {
    let recorde = parseInt(newString[0]);
    let piorValor = parseInt(newString[0]);
    let bateuRecorde = 0;
    for(i in pontos) {
        if(recorde < parseInt(pontos[i])) {
            bateuRecorde++;
            recorde = parseInt(pontos[i]);
        }
        if(piorValor > parseInt(pontos[i])) {
            piorValor = parseInt(pontos[i]);
            indecePioValor = parseInt(i) + 1;
        }
   
    }    
    return [bateuRecorde, indecePioValor];
}
console.log(melhorPiorDesempenho(newString));
