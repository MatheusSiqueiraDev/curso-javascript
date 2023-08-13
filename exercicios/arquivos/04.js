function dividir(dividendo, divisor) {
    let divisao = dividendo / divisor;
    let resto = dividendo % divisor;
    return `O resultado da divisão deu ${divisao} e o resto é ${resto}`;
}

console.log(dividir(6, 3));
console.log(dividir(5, 2));