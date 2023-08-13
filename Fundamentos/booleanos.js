isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('Os verdadeiros:');
console.log(`3 = ${!!3}`);
console.log(`-1 = ${!!-1}`);
console.log(`' ' = ${!!' '}`);
console.log(`Texto = ${!!'Texto'}`);
console.log(`[] = ${!![]}`);
console.log(`{} = ${!!{}}`)
console.log(`Infinity = ${!!Infinity}`);
console.log(`'isAtivo = true' = ${!!(isAtivo = true)}`);

console.log(`Os falsos:`);
console.log(`0 = ${!!0}`);
console.log(`'' = ${!!''}`);
console.log(`null = ${!!null}`);
console.log(`NaN = ${!!NaN}`);
console.log(`undefined = ${!!undefined}`);
console.log(`'isAtivo = false' = ${!!(isAtivo = false)}`);

console.log('Para finalizar: ');
console.log(!!('' || null || 0 || ' '));
console.log('' || null || 0 || 'Matheus' || 123); //Irá retornar o primeiro valor verdadeiro que encontrar da esquerda para direita

let nome = '';
console.log(nome || 'Desconhecido');
