const idade = 18;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

//Operador AND = &&
const podeDirigir = maiorDeIdade && possuiCNH;
console.log('Posso dirigir ? ', podeDirigir);

//Operador OR = ||
const podeViajarSozinho = maiorDeIdade || possuiCNH;
console.log('Posso viajar sozinho ? ', podeViajarSozinho);

//Operador NOT = ! , inverte o valor, se é true vira false, se é false vira true
const precisaDeAcompanhante = maiorDeIdade;
console.log('Preciso de um acompanhante para viajar ? ', precisaDeAcompanhante);


//AND &&
//OR ||
//NOT !