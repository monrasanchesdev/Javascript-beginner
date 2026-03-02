// Sintaxe Function 

// function saudacao(nome) { // nome é um parametro da função saudacao
//     console.log('Olá, ' , nome)
// }
// saudacao('Ramon') // Ramon é o "argumento" 

// Sintaxe Arrow Function - Jeito mais moderno de escrever funções

// const saudacao = (nome) => {
//    console.log('Vida longa e próspera,', nome)
// }



// usamos essa sintaxe quando temos funções mais simples, as vezes só tem uma única instrução, ou um único parametro
const saudacao = nome => console.log('Vida longa e próspera,', nome)

saudacao('Ramon')
saudacao('Catherine')
saudacao('Maria')

// Sintaxe Function

// function calcularDobroDeUm(numero) {
//    return numero * 2
// }

// Sintaxe Arrow Function

// const calcularDobroDeUm = (numero) => {
//      return numero * 2
// }

// Sintaxe função simples

const calcularDobroDeUm = numero => numero * 2

const numeroDobrado = calcularDobroDeUm(5)
    console.log('O dobro de 5 é:' , numeroDobrado)

