let nome = 'Ramon';
let idade = 26;
let altura = 1.80;

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof altura); //number

let estaChovendo = true;
console.log(typeof estaChovendo); //boolean

let cidade;
console.log(typeof cidade); //undefined 

let aprendeuJS = null;
console.log(typeof aprendeuJS); //object (isso é um comportamento estranho do JavaScript, null é considerado um tipo de objeto) 

let simbolo = Symbol('simbolo');
console.log(typeof simbolo); //symbol