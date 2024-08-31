/*
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

//DIFICULDADE : DIFICIL!

const prompt = require("readline-sync");



console.log("Calculador de MEDIA de valores");
let result=0;
let counter = 0;
let value = [];
let event = true;

while (event == true) {
    value[counter] = Number(prompt.question("Insira o numero para tirar a media:  \n  "));
    console.log("Caso queira encerrar a insercao,Digite o numero 0")

    if (value[counter] == 0) {
        event = false;

    } else {
        counter += 1;
    }
}
for (let lfItensArray = 0; lfItensArray <=counter; lfItensArray++) {
    result += value[lfItensArray];
}
result=result/counter;

console.log("A media dos valores e: " + result);






