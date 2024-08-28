


/* Questão 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

const prompt = require("readline-sync");
let numero= Number(prompt.question("Insira um Numero:  \n  "));

if(numero% 2==0){

    console.log("Seu numero é Par");
}
else{
    console.log("O numero é Impar")
}
    



