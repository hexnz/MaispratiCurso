


/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */



const prompt = require("readline-sync");

console.log("Calculadora de IMC: \n")
let size=Number.parseFloat(prompt.question("Digite sua Altura em metros:  \n  "));
let weight=Number.parseFloat(prompt.question("Digite sua Massa em Kg:  \n  "));
let imc= weight/(size**2);


if(imc>=40){
    console.log(" Voce esta com obesidade de grau 3, seu IMC e: \n"+imc)
}else if(imc>= 35 &&  imc<40){
    console.log(" Voce esta com obesidade de grau 2,seu IMC e:\n"+imc)
}else if(imc>= 30 &&  imc<35){
    console.log(" Voce esta com obesidade de grau 1,seu IMC e: \n"+imc)
}
else if(imc>=25 &&  imc<30){
    console.log(" Voce esta com Sobrepeso,seu IMC e: \n"+imc)
}
else if(imc>=18.6 &&  imc<25){
    console.log(" Voce esta com o IMC normal : \n"+imc)
}else{
    console.log(" Seu IMC esta abaixo do normal: \n"+imc)
}