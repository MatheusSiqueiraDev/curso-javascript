function diaUtil(dia) {
    switch (dia) {
        case 1: case 7:
            console.log(`É fim de semana`);
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log(`Dia útil!`);
            break;
        default:
            console.log(`Dia invalidado`);
    }
}

diaUtil(3);