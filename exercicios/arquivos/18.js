function numerode1a10(numero) {
    switch(numero) {
        case 1:
            return 'Um!';
        case 2: 
            return 'Dois';
        case 3: 
            return 'Três';
        case 4:
            return 'Quatro';
        case 5:
            return 'Cinco';
        case 6:
            return 'Seis';
        case 7:
            return 'Sete';
        case 8:
            return 'Oito';
        case 9: 
            return 'Nove';
        case 10:
            return 'Dez';
        default:
            return 'Número Invalidado!';
    }
}

console.log(numerode1a10(10));
console.log(numerode1a10(5));
console.log(numerode1a10(11));