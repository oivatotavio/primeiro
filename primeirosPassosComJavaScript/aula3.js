/*notas=[];

notas.push(5);
notas.push(7);
notas.push(3);
notas.push(9);
notas.push(9);
notas.push(8);

let soma = 0;
let media = 0;
let qtdeDeNotas = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
    qtdeDeNotas = i + 1;    
    media = soma/qtdeDeNotas
    console.log('A média parcial é: '+ media);    
}

console.log('\nA média final é: ' + media.toFixed(2));
*/

/*crie um programa que dado um numero crie a sua tabuada

const numero = 5;

for (let index = 1; index <= 10; index++) {
    const tabuada = numero * index;
    console.log (numero + ' X ' + index + ' = ' + tabuada);
}
*/

//crie um programa capaz de percorrer uma lista de numeros e imprimir cada numero par encontrado

let lista= [2, 3, 4, 5, 6, 7, 8, 9, 0 ];

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];
    if ((numero % 2) === 0) {
        console.log(`${numero}  é par!`); /* usando ` ` no lugar de ' ' eu posso imprimir o texto do jeito q foi escrito no código
                                         e usar ${ } para imprimir o conteúdo de uma variável sem precisar usar o operador de concatenação + ou , */
    }
    
}