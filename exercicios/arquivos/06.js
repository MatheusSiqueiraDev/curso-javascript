const jurosSimples = (capitalInicial, taxaDeJuros, tempo) => {
    let juros = capitalInicial * taxaDeJuros * tempo;
    let montante = capitalInicial + juros;
    return `R$${montante.toFixed(2).replace('.', ',')}`;
}

console.log(jurosSimples(1000, 0.10, 12));

const jurosComposto = (capitalInicial, taxaDeJuros, tempo) => {
    let valorJurosComposto = capitalInicial * Math.pow((1 + taxaDeJuros), tempo);
    return `R$${valorJurosComposto.toFixed(2).replace('.', ',')}`;
} 

console.log(jurosComposto(10000, 0.10, 3)); 