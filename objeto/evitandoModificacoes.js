// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35};
Object.seal(pessoa);
console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome = 'Teste';
pessoa.nome = 'Matheus';
delete idade;

console.log(pessoa);

//Object.freeze
const carro = {nome: 'Fusca', velocidade: 60};
Object.freeze(carro);

carro.nome = 'Gol';
carro.marca = 'Nova';
carro.velocidade = 90;
delete velocidade;

console.log(carro);