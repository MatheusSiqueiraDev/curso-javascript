function comprarCarro(automovel) {
    switch(automovel) {
        case 'hatch':
            return 'Compra efetuada com sucesso!';
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            return 'Tem certeza que não prefere esse modelo?';
        default:
            return 'Não trabalhamos com esse tipo de automóvel aqui!';
    }
}

console.log(comprarCarro('hatch'));