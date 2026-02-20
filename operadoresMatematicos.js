const numeroUm = 4;
const numeroDois = 8;

const subtracao = numeroUm - numeroDois;

console.log('subtracao: ', subtracao); // -4

const soma = numeroUm + numeroDois;

console.log('soma: ', soma); // 12

const divisao = numeroDois / numeroUm;

console.log('divisao: ', divisao); // 2

const multiplicacao = numeroUm * numeroDois;

console.log('multiplicacao: ', multiplicacao); // 32

// a ordem das operações é importante, se não usarmos os parênteses, a multiplicação será feita antes da soma, o que resultaria em um valor diferente.

let contaComplexa = (numeroUm + numeroDois) * numeroUm;

console.log('contaComplexa: ', contaComplexa); // 48

contaComplexa = numeroUm + numeroDois * numeroUm; 

console.log('contaComplexa: ', contaComplexa); // 36

const resto = 13 % 2;

console.log('resto: ', resto); // 1, o operador de módulo retorna o resto da divisão entre dois números. Neste caso, 13 dividido por 2 é igual a 6 com um resto de 1.

const potencia = 2 ** 3;

console.log('potencia: ', potencia); // 8, o operador de exponenciação eleva o primeiro operando à potência do segundo operando. Neste caso, 2 elevado à potência de 3 é igual a 8.

let contador = 5;

contador++; // contador = contador + 1;

console.log('Incremento: ', contador); // 6

contador--;//contador = contador - 1;

console.log('Decremento: ', contador); // 5

let numeroTres = 2;

numeroTres *= 2;//numeroTres = numeroTres * 2;

// numeroTres -= 1; // numeroTres = numeroTres - 1;
// numeroTres /= 2; // numeroTres = numeroTres / 2;
// numeroTres += 1; // numeroTres = numeroTres ** 1;
// numeroTres %= 1; // numeroTres = numeroTres % 1;

console.log('numeroTres: ', numeroTres); // 4

