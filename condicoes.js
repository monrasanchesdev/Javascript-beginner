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

if (idade != null && idade >= 18) {
    console.log('Você é maior de idade');
} else if (idade != null && idade < 18){
    console.log('Você é menor de idade');
}

// tem duas condições se repetindo, idade != null, então podemos simplificar o código, colocando a condição idade != null apenas uma vez, e dentro do if verificar se é maior ou menor de idade

if (idade != null) {
    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else if (idade < 18) {
        console.log('Você é menor de idade');
    }
}


// Existem outros valores que são considerados falsy, ou seja, são considerados false, como o número 0, undefined, null e string vazia

const numero = 0;
const indefinido = undefined;
const nulo = null;
const textoVazio = '';



