function alturaCrianças(altura1, taxa1, altura2, taxa2) {
    let ano = 0;
    if(altura1 < altura2 && taxa1 > taxa2) {
        while(altura1 <= altura2) {
            altura2 = altura2 + taxa2;
            altura1 = altura1 + taxa1;
            ano++;
        }
        return `O primeiro menino daqui a ${ano} ano(s) terá ${altura1.toFixed(2)}cm, e vai passar o segundo que terá ${altura2.toFixed(2)}cm!`;
    } else if(altura1 > altura2 && taxa1 < taxa2) {
        while(altura2 <= altura1) {
            altura2 = altura2 + taxa2;
            altura1 = altura1 + taxa1;
            ano++;
        }
        return `O primeiro menino daqui a ${ano} ano(s) terá ${altura1.toFixed(2)}cm, e vai passar o segundo que terá ${altura2.toFixed(2)}cm!`;
    } else {
        return `O menor vai ser sempre o mesmo!`;
    }
}

console.log(alturaCrianças(1.50, 0.02, 1.60, 0.01));