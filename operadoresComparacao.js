let idadeRamon = 26;
let idadeCatherine = 28;
let idadeMinhaFilha = 5;

//operador igualdade
const comparacao = idadeRamon == idadeCatherine;
console.log('Ramon tem a mesma idade que Catherine ?', comparacao);

//operador de diferença
const comparacao6 = idadeRamon != idadeCatherine;
console.log('Ramon tem uma idade diferente de Catherine ? ', comparacao6);

//maior que
const comparacao2 = idadeRamon > idadeCatherine;
console.log('Ramon é mais velho que Catherine ?', comparacao2);

//menor que
const comparacao3 = idadeRamon < idadeCatherine;
console.log('Ramon é mais novo que Catherine ?', comparacao3);

//maior ou igual a
const comparacao4 = idadeRamon >= idadeCatherine;
console.log('Ramon tem a mesma idade ou mais que Catherine ?', comparacao4);

//menor ou igual a
const comparacao5 = idadeRamon <= idadeCatherine;
console.log('Ramon tem a mesma idade ou menos que Catherine ?', comparacao5);
//igual ou maior
const souMaiorDeIdade = idadeRamon >= 18;
console.log('Sou maior de idade ? ', souMaiorDeIdade);

//igual ou menor
const minhaFilhaEhMenorDeIdade = idadeMinhaFilha <= 18;
console.log('Minha filha é menor de idade ? ', minhaFilhaEhMenorDeIdade);

//comparação estrita
console.log('Mudando idade de Catherine para 26 anos, e mudando o tipo de dado da idade de Ramon para string...');

idadeRamon = '26';
idadeCatherine = 26;

const comparacaoEstrita = idadeRamon === idadeCatherine;
console.log('Ramon tem a mesma idade que Catherine ? (comparação estrita) ', comparacaoEstrita);

const comparacao7 = idadeRamon !== idadeCatherine;
console.log('Ramon tem uma idade diferente de Catherine ? (comparação estrita) ', comparacao7);



