/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require("readline-sync");
let number=Number(prompt.question("Insira um numero:  \n  "));



for(let i=1;i<=10;i++)
    {
    console.log(i+" vez(es)que o numero aparece  "+number+"\n");
   
}