let vetor = [20, 15, 45, 10, 4];

function maiorMenor(numeros) {
    let maior = numeros[0];
    let menor = numeros[0];
    numeros.forEach(function(numero) {
        if(numero > maior) {
            maior = numero;
        }
        if(numero < menor) {
            menor = numero;
        }
    });
    return `O maior valor é ${maior} e o menor valor é ${menor}`;
}

console.log(maiorMenor(vetor));