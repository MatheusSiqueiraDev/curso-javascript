function sistemaDeNotas(nota) {
    let resto = null;
    let contador = 0;
    if(nota < 40) {
        return `Reprovado com a nota ${nota}`;
    } else if (nota < 100) {
        while (resto != 0) {
            nota++
            resto = nota % 5;
            contador++;
        }
        if(contador > 3) {
            nota = nota - contador;
        }
        return `Aprovado com a nota ${nota}`;
    } else {
        return `Nota ${nota} invalida!`;
    }
}

console.log(sistemaDeNotas(57));