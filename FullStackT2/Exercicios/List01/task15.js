// DIFICULDADE: UM POUCO DIFICIL// 

/* Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

let result;
let fibonaci=[];
fibonaci[0]=0;
fibonaci[1]=1;

for(let cont=0;cont<40;cont++){
    fibonaci[cont+2]=fibonaci[cont]+fibonaci[cont+1];
    result=fibonaci[cont];
    console.log(result);
}