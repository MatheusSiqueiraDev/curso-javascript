function verificarTriangulo(a, b, c) {
    let formulas = [Math.abs(b - c) < a && a < b + c, Math.abs(a - c) < b && b < a + c, Math.abs(a - b) < c && c < a + c];
    if(formulas[0] && formulas[1] && formulas[2]) {
        if(a == b && c == a) {
            return 'É um triângulo Equilátero';
        } else if (a == b || c == a || b == c) {
            return 'É um triângulo Isósceles';
        } else {
            return 'É um triângulo Escaleno';
        }
    } else {
        return 'Não é um triângulo';
    }
}

console.log(verificarTriangulo(3, 4, 3));

/*
| b - c | < a < b + c
| a - c | < b < a + c
| a - b | < c < a + b
*/

