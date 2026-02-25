// contar quantos números pares e quantos números ímpares nós temos entre 1 e 100

let totalNumerosPares = 0;
let totalNumerosImpares = 0;

for(let numero = 0; numero <= 100; numero++) {
    if(numero % 2 == 0) {
        totalNumerosPares++
    } else {
        totalNumerosImpares++
    }
}

console.log ('Total de números pares: ', totalNumerosPares);
console.log ('Total de números ímpares: ', totalNumerosImpares);


// mostrar os números pares e os números ímpares entre 1 e 100

/* let numero = 1;

for(let numero = 1; numero <= 100; numero++) {
    if(numero % 2 === 0) {
        console.log('Números pares: ', numero);
}
}


while(numero <= 100) {
    if(numero % 2 > 0) {
        console.log('Números ímpares: ', numero);
    }
    numero++;
} */