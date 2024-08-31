



/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

const prompt = require("readline-sync");
let age= Number(prompt.question("Informe sua idade:  \n  "));


if(age<=10){
    console.log("Voce e uma criança");
    console.log("voce tem "+age+" anos");
}
else if(age>10 && age<18){
    console.log("Voce e um Adolescente");
    console.log("voce tem "+age+" anos");
}
else if(age>=18 && age<65){
    console.log("Voce e um Adulto");
    console.log("voce tem "+age+" anos");
}else{
    console.log("Voce e um Idoso");
    console.log("voce tem "+age+" anos");
}