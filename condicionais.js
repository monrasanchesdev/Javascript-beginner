let idade = 26;

if (idade >= 18) {
    console.log('É maior de idade' , idade);
} else {
    console.log('É menor de idade', idade);
}

idade = 17;

if (idade >= 18) {
    console.log('É maior de idade' , idade);
} else {
    console.log('É menor de idade', idade);
}

// entre 9 e 10: excelente
//entre 7 e 8: bom
//entre 4 e 6: regular  
//entre 0 e 3: ruim

let notaDoAluno = 8;

if (notaDoAluno >= 9) {
    console.log('Nota excelente');
} else if (notaDoAluno >= 7) {
    console.log('Nota boa');
} else if (notaDoAluno >= 4) {
    console.log('Nota regular');
} else if (notaDoAluno <= 3) {
    console.log('Nota ruim');
}

// else if = se a primeira condição for falsa, ele vai para a próxima condição, e assim por diante, até encontrar uma condição verdadeira ou chegar no final do bloco de código. O else é opcional, e é executado quando todas as condições anteriores forem falsas.


