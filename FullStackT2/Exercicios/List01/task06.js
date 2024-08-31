
/*6.Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

const prompt = require("readline-sync");
let ladoA=Number(prompt.question("Digite o valor do primeiro lado:  \n  "));
let ladoB=Number(prompt.question("Digite o valor do segundo lado  \n  "));
let ladoC=Number(prompt.question("Digite o valor do terceiro lado  \n  "));


if(ladoA+ladoB >ladoC && ladoB+ladoC >ladoA && ladoA+ladoC>ladoB){
    console.log("É UM TRIANGULO");
     if(ladoA==ladoB && ladoB==ladoC){
        console.log("DO TIPO EQUILATERO");
    }else if(ladoA==ladoB||ladoA==ladoC||ladoB==ladoC){
        console.log("DO TIPO ISÓCELES");
    }else{
        console.log("DO TIPO ESCALENO");
    }
}
else{
    console.log("NAO E UM TRIANGULo");
}

