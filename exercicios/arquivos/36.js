const numeros = [1, 5, 2, 9, 7];

function multiplicacao1(vetor, inteiro) {
    vetor.forEach(function(elemento, indice) {
        vetor[indice] = elemento * inteiro;
    });
    return vetor;
}

function multiplicacao2(vetor, inteiro) {
    vetor.forEach(function(elemento, indice) {
        if(elemento > 5) {
            vetor[indice] = elemento * inteiro;
        }
    });
    return vetor;
}

console.log(multiplicacao1(numeros, 2));
console.log(multiplicacao2(numeros, 4));
