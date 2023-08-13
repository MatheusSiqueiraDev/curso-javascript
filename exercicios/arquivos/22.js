function taxaAnuidade(mes, valor) {
    if(mes > 0 || mes <= 13) {
        atraso = mes - 1
        let valorJurosComposto = valor * Math.pow((1 + 0.05), atraso);
        return `Você deve pagar R$${valorJurosComposto.toFixed(2)}`;
    } else {
        return 'Esse mês não existe!';
    }
}

console.log(taxaAnuidade(5, 24));