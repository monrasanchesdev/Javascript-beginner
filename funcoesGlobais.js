// setTimeout

function saudacao(){
    console.log('Eai, beleza ?')
}

setTimeout(saudacao, 1000) // 1000ms = 1 segundo

let contador = 0

// setInterval 

const id = setInterval(() => {
    contador++
    console.log('Vou contar até 10:' ,contador)
    if (contador == 10) {
        clearInterval(id)
    }
}, 1000)

