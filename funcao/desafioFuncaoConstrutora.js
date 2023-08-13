function pessoa(nome) {
    this.nome = nome;

    // Método Público
    this.falar = () => console.log(`Meu nome é ${this.nome}`);
}

const obj = new pessoa('Matheus');
console.log(obj);
obj.falar();