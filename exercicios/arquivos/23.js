function statusAluno(codigo, n1, n2, n3) {
    let media = (n1 + n2 + n3)/3;
    do {
        console.log(`O código do aluno é ${codigo}`);
        console.log(`As notas do aluno são: ${n1.toFixed(1)}, ${n2.toFixed(1)}, ${n3.toFixed(1)}`);
        console.log(`A média do aluno é ${media.toFixed(1)}`);
        if(media >= 5) {
            console.log(`APROVADO`);
        } else {
            console.log(`REPROVADO`);
        }
        codigo = -codigo;
    } while(codigo > 0);
}

statusAluno(21, 6, 8, 4);