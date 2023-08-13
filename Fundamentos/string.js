const escola = 'Cod3r';

console.log(escola.charAt(4)); // Pegar valor no indce 4
console.log(escola.charAt(5)); 
console.log(escola.charCodeAt(0)); // Pegar valor no indice 0 e transformalo em Unicode
console.log(escola.indexOf(3)); // Pega indice no qual o valor 3 está

console.log(escola.substring(1));  // Apresentar string a partir do indice 1
console.log(escola.substring(0, 4)); // Apresenta string a partir do incice 0 e porar antes do indice 4

console.log('Escola '.concat(escola).concat('!')); 
console.log('Escola ' + escola + '!');
console.log(escola.replace('C', 'a')); // Substituir C por a na string
console.log('Steve, Bill, Einsten'.split(',')); // Colocar valores dentro de uma array, indentificando o que as separa.

