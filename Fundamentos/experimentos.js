let a = 3;

global.b = 123;
this.c = 456;
this.d = false;
this.e = 'Teste';

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

module.exports = {f: 'f', g: 'g', h: 'h'}
console.log(module.exports);
module.exports.i = 'i';
console.log(module.exports);


// Criando uma variável maluca: Sem var e sem let
abc = 3; // Não faça isso
console.log(global.abc);
console.log(global);