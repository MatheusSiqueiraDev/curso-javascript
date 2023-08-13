const formatarNumero = valor => `R$${valor.toFixed(2).replace('.', ',')}`;

console.log(formatarNumero(0.30000000000000004));