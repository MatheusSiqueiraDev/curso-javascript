const numeros = [1, 2, 3, 4, 5, 6];
const numeros2 = [7, 8, 9, 10, 11, 12];

function organizar(vetor1, vetor2) {
    vetor1.forEach(function(valor, indice) {
        vetor1[indice] = vetor2[indice];
        vetor2[indice] = valor;
    });
    return `Primeiro vetor: ${vetor1}. Segundo vetor: ${vetor2}`;
}

console.log(organizar(numeros, numeros2));