let vetor = [-1, 15, -35, 60, -23, -4];

function numerosNegativos(numeros) {
    quantidaNNegativos = 0;
    numeros.forEach(function(numero) {
        if(numero < 0) {
            quantidaNNegativos++;     
        }
    });
    return `A quantidade de números negativos é ${quantidaNNegativos}`;
}

console.log(numerosNegativos(vetor));