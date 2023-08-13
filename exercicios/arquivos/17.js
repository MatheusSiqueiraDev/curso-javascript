function aumentarSalarial(plano, salario) {
    switch(plano) {
        case 'A':
            return salario + salario * 10/100
        case 'B':
            return salario + salario * 15/100;
        case 'C':
            return salario + salario * 20/100;
        default:
            return 'Plano invalidado!';
    }
}

console.log(aumentarSalarial('C', 20));