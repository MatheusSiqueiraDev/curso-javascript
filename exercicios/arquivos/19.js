function comprarProduto(produto, quantidade) {
    switch(produto) {
        case 100:
            console.log(`O valor a ser pago por Cachorro Quente é R$${(quantidade*3).toFixed(2)}`);
            break;
        case 200:
            console.log(`O valor a ser pago por um Hambúrguer Simples é R$${(quantidade*4).toFixed(2)}`);
            break;
        case 300:
            console.log(`O valor a ser pago por um Cheeseburguer é R$${(quantidade*5.50).toFixed(2)}`);
            break;
        case 400:
            console.log(`O valor a ser pago por um Bauru é R$${(quantidade*7.50).toFixed(2)}`);
            break;
        case 500:
            console.log(`O valor a ser pago por um Refrigerante é R$${(quantidade*3.50).toFixed(2)}`);
            break;
        case 600:
            console.log(`O valor a ser pago por um Suco é R$${(quantidade*2.80).toFixed(2)}`);
            break;
        default:
            console.log('Não temos esse produto!');
    }
}

comprarProduto(100, 2);