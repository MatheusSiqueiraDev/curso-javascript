function calculadoraBhaskara(a, b, c) {
    const respostas = [];
    const valorDelta = Math.pow(b, 2) -4 * a * c; 
    if (valorDelta < 0) {
        return 'Valor de delta é negativo!';
    } else {
        const valorX1 = (-b + Math.sqrt(valorDelta)) / 2 * a;
        const valorX2 = (-b - Math.sqrt(valorDelta)) / 2 * a;
        respostas.push(valorX1, valorX2);
        return respostas;
    }
}

console.log(calculadoraBhaskara(1, 0, -16));