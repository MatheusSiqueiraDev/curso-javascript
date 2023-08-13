let vetor = [5, 6, 10, 12, 15, 16, 20, 35, 45];

function intervelado10a20(lista) {
    let dentroIntervalo = 0;
    let foraInvetevalo = 0;
    for(i in lista) {
        if(lista[i] >= 10 && lista[i] <= 20) {
            dentroIntervalo++
        } else {
            foraInvetevalo++;
        }
    }
    return `A quantidade de elementos dentro do intervalo de 10 a 20 é: ${dentroIntervalo} e fora é ${foraInvetevalo}`;
}

console.log(intervelado10a20(vetor));