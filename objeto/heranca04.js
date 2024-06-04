function MeuObjeto() {}
console.log(MeuObjeto.prototype);
console.log(MeuObjeto.prototype.__proto__);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

console.log(obj1.__proto__)
console.log(obj1.__proto__ == obj2.__proto__)

console.log(Object.prototype)
console.log(Function.prototype.__proto__)
console.log(typeof(Object))
console.log(typeof(MeuObjeto))

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}

obj1.falar();

obj2.nome = 'Teste';
obj2.falar();

const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype;
console.log(obj3.__proto__)
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);