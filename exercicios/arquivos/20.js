function caixaEletronico(valor) {
    const notas = [nota100 = 0, nota50 = 0, nota10 = 0, nota5 = 0, nota1 = 0];
    const valorNotas = [100, 50, 10, 5, 1];
    while(valor > 0) {
        let condicao = false;
        for(i = 0; condicao != true; i++) {
            if(valor - valorNotas[i] >= 0) {
                valor -= valorNotas[i];
                notas[i]++;
                condicao = true;
            }
        }
    }
    notas.forEach((nome, indice) => {
        if(nome > 0) {
            console.log( `${nome} nota(s) de R$${valorNotas[indice]}`);
        }
    });
}

caixaEletronico(3256);