/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

// DIFICULDADE :RELATIVAMENTE DIFICIL
const prompt = require("readline-sync");


console.log("______________CALCULADORA DE FATORIAL_________")
let number=Number(prompt.question("Insira um numero :  \n  "));
let maxLoop =number-1;

let fatorial=maxLoop;
for(let array=1;array<maxLoop;array++){
   
    if(number>1){
    number*=fatorial;
    fatorial --;
    }

}
console.log("O fatorial do numero e:"+number);