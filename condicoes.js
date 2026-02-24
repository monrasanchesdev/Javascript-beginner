// 

let nome = '';

// o javascript aplica uma lógica para saber se é true ou false, nesse caso, string vazia é considerada false, então o else é executado

if (nome) {
    console.log('Olá, ', nome);
} else {
    console.log('Ainda não sei o seu nome');
}

// Agora, se atribuirmos um valor para a variável nome, o if passa a ser true e o console.log do if é executado

nome = 'Ramon';

if (nome) {
    console.log('Olá, ', nome);
} else {
    console.log('Ainda não sei o seu nome');
}

// null é um valor que representa a ausência de valor, ou seja, é um valor vazio, mas diferente de string vazia, ele é considerado false, então o else é executado

const idade = null;

if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}