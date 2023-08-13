function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 15
    }
}

console.log(criarProduto('Placa de Vídeo', 560));