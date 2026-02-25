// estrutura do laço de repetição FOR, é composto por três partes: a inicialização, a condição e o incremento. A inicialização é onde declaramos a variável de controle do laço, a condição é onde verificamos se o laço deve continuar executando, e o incremento é onde atualizamos a variável de controle para evitar um loop infinito.

for(let contador = 0; contador <= 10; contador++) {
    console.log('Contador: ', contador);
}

for(let numero = 0; numero <= 15; numero++) {
    if(numero % 2 == 0) {
        console.log('Números pares: ', numero);
    }
}

for(let numero = 0; numero <= 15; numero++) {
    if(numero % 2 > 0 ) {
        console.log('Números ímpares: ', numero);
    }
}

const palavra = 'ele tem uma calopsita';

//palavra.lenght - retorna o número de caracteres da string, incluindo espaços.
//palavra[1] - retorna o caractere na posição 1 da string, lembrando que a contagem começa do zero.

for(let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador]);
}