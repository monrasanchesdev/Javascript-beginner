function saudacao(){
    console.log('Eai, beleza ?')
}

setTimeout(saudacao, 1000) // 1000ms = 1 segundo

let contador = 0

setInterval(() => {
    contador++
    console.log('Tempo decorrido:' ,contador)
}, 1000)