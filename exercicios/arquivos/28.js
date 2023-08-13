let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

function parImpar(numeros) {
    let impares = 0;
    let pares = 0;
    numeros.forEach(function(numero) {
        if(numero % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    });
    return `A quantidade de pares é ${pares} e a de impares é ${impares}`;
}

console.log(parImpar(numeros));