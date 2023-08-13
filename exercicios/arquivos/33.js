const vetorString = ['Olá', 'Tudo', 'Bem?', 'Vasco'];
const vetorNumber = [1, 2, 3, 4];
const vetorDouble = [1.2, 1.3, 1.4, 1.5];

function unirVetor(vetor1, vetor2, vetor3) {
    let novoVetor = vetor1.concat(vetor2);
    novoVetor = novoVetor.concat(vetor3);
    return novoVetor;
}

console.log(unirVetor(vetorString, vetorNumber, vetorDouble));