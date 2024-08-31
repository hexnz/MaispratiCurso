/*
11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */
const prompt = require("readline-sync");
let number=[];
let result=0;

for(let i=0;i<5;i++){
   
 number[i]=Number(prompt.question("Insira valor numero "+(i+1)+" :\n  "));
 result+=number[i];
 
}
console.log("O valor total dos numeros e:"+result);