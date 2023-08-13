function planoDeSaude(idade) {
    if(idade <= 0) {
        return 'Essa pessoa não existe!';
    } else if(idade < 10) {
        return `O valor a ser pago será de R$${(100+80).toFixed(2)}`;
    } else if(idade < 30) {
        return `O valor a ser pago será de R$${(100+95).toFixed(2)}`;
    } else {
        return `O valor a ser pago será de R$${(100+130).toFixed(2)}`; 
    }
} 

console.log(planoDeSaude(29));