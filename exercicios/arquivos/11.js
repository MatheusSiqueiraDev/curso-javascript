const anoBissexto = ano => {
    if(ano % 4 == 0) {
        console.log(`${ano} é bissexto!`);
        return true;
    } else {
        console.log(`${ano} não é bissexto!`);
        return false;
    }
} 

console.log(anoBissexto(2016))