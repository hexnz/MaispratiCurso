

/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require("readline-sync");
let valueN1=Number(prompt.question("Insira o valor numero 1:  \n  "));
let valueN2=Number(prompt.question("Insira o valor numero 2:  \n  "));

while(valueN1==valueN2){
    console.log("Os valores nao podem ser iguais,insira-os novamente: \n")
    valueN1=Number(prompt.question("Insira o valor numero 1:  \n  "));
    valueN2=Number(prompt.question("Insira o valor numero 2:  \n  "));
}
if(valueN1>valueN2){
    console.log("A ordem crescente dos valore e:"+valueN2+", "+valueN1);
}
else{
    console.log("A ordem crescente dos valore e:"+valueN1+", "+valueN2);
}
