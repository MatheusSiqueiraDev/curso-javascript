function soBoaNoiticia(nota) {
    if (nota>=7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoiticia(8.1);
soBoaNoiticia(6.1);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(null);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});