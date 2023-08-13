const vetor = [5, 5];

function media(numeros) {
    let soma = 0;
    numeros.forEach(function(numero) {
        soma += numero;
    });
    return `A média é ${(soma/numeros.length).toFixed(2)}`;
}

console.log(media(vetor));