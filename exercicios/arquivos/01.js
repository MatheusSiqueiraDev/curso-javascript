const conta = (valor1, valor2) => {
    let soma = valor1 + valor2;
    let subtracao = valor1 - valor2;
    let multiplicacao = valor1 * valor2;
    let divisao = valor1 / valor2;
    return `Soma: ${soma} Subtração: ${subtracao} Multiplicação: ${multiplicacao} Divisão: ${divisao}`;
}

console.log(conta(2,3));
console.log(conta(10,5));