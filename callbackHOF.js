// HOF -> Higher-Order Function === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {

    return operacao(numero1,numero2)
}

function soma(num1, num2) {
    return num1 + num2 
}

function divisao(num1, num2) {
    return num1 / num2
}

const resultadoSoma = calcular(15, 5, soma)  // soma é um callback
console.log('O resultado da soma é, ', resultadoSoma) 

const resultadoDivisao = calcular(15, 5, divisao) 
console.log('O resultado da divisão é, ', resultadoDivisao) // divisao é um callback