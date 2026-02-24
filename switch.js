// entre 9 e 10: excelente
//entre 7 e 8: bom
//entre 4 e 6: regular  
//entre 0 e 3: ruim

const notaDoAluno = 8;
 
// O switch é uma estrutura de controle que permite testar uma variável contra diferentes valores, e executar um bloco de código diferente para cada valor. Ele é uma alternativa ao if else, e pode ser mais legível quando temos muitas condições para verificar.

switch (notaDoAluno) {
    case 10:
    case 9:
        console.log('Nota excelente');
        break;
    case 8:
    case 7:
        console.log('Nota boa');
        break;
    case 6:
    case 5:
    case 4:
        console.log('Nota regular');
        break;
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Nota ruim');
        break;
    default:
        console.log('Nota inválida');                
}

// A diferença entre o switch e o if else é que o switch compara a variável com valores específicos, enquanto o if else pode comparar a variável com expressões mais complexas. O switch é mais adequado quando temos um número limitado de valores para comparar, enquanto o if else é mais flexível e pode ser usado em uma variedade de situações.