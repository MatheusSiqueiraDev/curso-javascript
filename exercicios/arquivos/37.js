const pa = (n, a1, r) => {
    let elementos = [];
    let contador = 0;
    for(i = a1; contador < n; i += r) {
        contador++;
        elementos.push(i);
    }
    let soma = elementos.reduce((primeiroValor, segundoValor) => primeiroValor + segundoValor);
    return `A soma dos elementos ${elementos} dessa PA é igual: ${soma}`;
}

console.log(pa(10, 2, 2));

const pg = (n, a1, r) => {
    let elementos = [];
    let contador = 0;
    for(i = a1; contador < n; i = i * r) {
        contador++;
        elementos.push(i);
    }
    let soma = elementos.reduce((primeiroValor, segundoValor) => primeiroValor + segundoValor);
    return `A soma dos elementos ${elementos} dessa PG é igual: ${soma}`;
}

console.log(pg(4, 2, 2));