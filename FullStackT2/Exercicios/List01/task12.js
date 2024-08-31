/*
12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */



const prompt = require("readline-sync");
let number=Number(prompt.question("Insira um numero para ser o multiplicando:  \n  "));

console.log("_____________________TABUADA DO "+number+"________________________")
for(let i=0;i<=1000;i++){

    console.log(number+" * "+i+"="+number*i);
}
console.log("quer realmente verificar se esta certo,multiplique manualmente......")