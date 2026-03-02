// function saudacao(nome) { // nome é um parametro da função saudacao
//     console.log('Olá, ' , nome)
// }
// saudacao('Ramon') // Ramon é o "argumento" 

// const saudacao = (nome) => {
//    console.log('Vida longa e próspera,', nome)
// }

const saudacao = nome => console.log('Vida longa e próspera,', nome)

saudacao('Ramon')
saudacao('Catherine')
saudacao('Maria')

// function calcularDobroDeUm(numero) {
//    return numero * 2
// }

const calcularDobroDeUm = (numero) => {
      return numero * 2
}

const numeroDobrado = calcularDobroDeUm(5)
    console.log('O dobro de 5 é:' , numeroDobrado)

