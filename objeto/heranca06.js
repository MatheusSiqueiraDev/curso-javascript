function Aula(nome, videoId) {
    this.nome = nome;
    this.videoId = videoId;
}

const aula1 = new Aula('Bem vindo', 540);
const aula2 = new Aula('Até breve', 454);

console.log(aula1)
console.log(aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'Nova aula', 5050);

console.log(aula3);