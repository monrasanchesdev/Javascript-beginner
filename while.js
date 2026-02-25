let contador = 1;

// while -  se a primeira condição for verdadeira, o bloco de código dentro do while será executado. Depois disso, a condição é verificada novamente, e se ainda for verdadeira, o bloco de código será executado novamente. Esse processo continua até que a condição se torne falsa.

// erro comum - esquecer de colocar o contador++ dentro do bloco de código, o que resultará em um loop infinito, ou colocar a condição de parada incorretamente, o que pode fazer com que o loop nunca seja executado ou seja executado mais vezes do que o esperado.

while(contador <= 10) {
    console.log('Contador: ', contador);
    contador++;
}

let numero = 1;

// do - o bloco de código dentro do do será executado pelo menos uma vez, mesmo que a condição seja falsa. Depois de executar o bloco de código, a condição é verificada. Se a condição for verdadeira, o processo se repete, caso contrário, o loop é encerrado.

// erro comum - se a condição for falsa desde o início, o bloco de código dentro do do será executado uma vez, o que pode não ser o comportamento desejado. Além disso, se a condição nunca se tornar falsa, o loop continuará indefinidamente, o que pode causar um travamento no programa.

do {
    console.log('Número atual: ', numero);
    numero++;
} while(numero <= 10);


