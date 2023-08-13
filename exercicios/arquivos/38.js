function nImpares(n1 = 0, n2 = 100) {
    if(n1 < n2) {
        inicio = n1;
        fim = n2;
    } else {
        inicio = n2;
        fim = n1;
    }
    for(i = inicio; i< fim; i++) {
        if(i % 2 != 0) {
            console.log(i);
        }
    }
}

nImpares(2, 5);