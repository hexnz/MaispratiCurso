


/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.. */


const prompt = require("readline-sync");
let nota= Number(prompt.question("Informe a nota do Aluno:  \n  "));

while(nota>10){
    console.log("A nota deve ser entre 0-10,tente novamente!")
    nota= Number(prompt.question("Informe a nota do Aluno:  \n  "));
}
if(nota>=7){
    console.log("Aluno Aprovado");
}
else if(nota>=5 && nota<7){
    console.log("Aluno de Recuperacao!")
}else{
    console.log("Aluno Reprovado por Nota!")
}
