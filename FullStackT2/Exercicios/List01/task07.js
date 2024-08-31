
/*7.As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require("readline-sync");
let fruit=Number(prompt.question("Digite a quantidade de macas que quer comprar:  \n  "));
let valor;
if(fruit<12){
    valor=fruit*0.30;
}
else{
    valor=fruit*0.25;
}
console.log("voce comprou "+fruit+" macas por:"+valor+" Reais.");