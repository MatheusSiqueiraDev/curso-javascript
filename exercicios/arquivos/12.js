const fatorial = numero => {
    for(i = numero - 1; i>1; i--) {
        numero = numero * i;
    }
    return numero;
}

console.log(fatorial());