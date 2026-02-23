let idade = 26;

//if (idade >= 18) {
//    console.log('É maior de idade' , idade);
// } else {
//    console.log('É menor de idade', idade);
// }

//idade = 17;

//if (idade >= 18) {
//    console.log('É maior de idade' , idade);
// } else {
//    console.log('É menor de idade', idade);
// }

idade >= 18 ? console.log('É maior de idade' , idade) : console.log('É menor de idade', idade);


let notaDoAluno = 8;

//if (notaDoAluno >= 9) {
//    console.log('Nota excelente');
// } else if (notaDoAluno >= 7) {
//    console.log('Nota boa');
// } else if (notaDoAluno >= 4) {
//    console.log('Nota regular');
// } else if (notaDoAluno <= 3) {
//    console.log('Nota ruim');
// }

notaDoAluno >= 9 ? console.log('Nota excelente') : 
    notaDoAluno >= 7 ? console.log ('Nota boa') :
        notaDoAluno >= 4 ? console.log('Nota regular') :
            notaDoAluno <= 3 ? console.log('Nota ruim') : null;

// operador ternário é uma forma mais compacta de escrever um if, ele é composto por três partes: a condição, o valor retornado se a condição for verdadeira e o valor retornado se a condição for falsa. Ele é representado pelo símbolo ? e : . A sintaxe é a seguinte: condição ? valor se verdadeiro : valor se falso. Ele pode ser aninhado, ou seja, pode ser usado dentro de outro operador ternário para criar uma estrutura de decisão mais complexa.

