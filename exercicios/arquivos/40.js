const notas = [0.1, 3.0, 6.5, 1.3, 9.8, 10, 5.4];

function conceitoNotas(vetor) {
    vetor.forEach(function(valor) {
        if(valor <= 0 || valor <= 4.9) {
            console.log(`A nota de ${valor} é de conceito D.`);
        } else if(valor == 5.0 || valor <= 6.9) {
            console.log(`A nota de ${valor} é de conceito C.`);
        } else if(valor == 7.0 || valor <= 8.9) {
            console.log(`A nota de ${valor} é de conceito B.`);
        } else if(valor == 9.0 || valor <= 10) {
            console.log(`A nota de ${valor} é de conceito A.`);
        }
    });
}

conceitoNotas(notas);