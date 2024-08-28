



/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */


const prompt = require("readline-sync");
console.log("O Genio da Lampada Aparece e te da uma opcao de tres escolhas:  \n   ")
console.log("1. A cada 10 cm reduzido de tamanho você recebe 500 mil-Você deseja 5 milhoes \n")
console.log("2.Voce Recebe 2 pares de Asas e pode voar para qualquer lugar,mas emite um som de pernilongo por um raio de 2km,mas ninguem lhe suporta.\n")
console.log("3.Voce se torna o homem mais inteligente do Mundo,porem perde a memoria a cada 1 hora.\n");

let choice=Number(prompt.question("Escolha uma das tres Opcoes:  \n  "));

switch(choice){

    case 1:
         console.log("Voce vira um Anao e lhe contratam para o novo filme da Branca de Neve e o Anao Ricasso");
        break;
    
    case 2:
        console.log("Ninguem lhe Suporta,por favor,saia daqui. BizBZIzbizbzibzi");
        break;

    case 3:
        console.log("Parece que foi a melhor escolha,mas voce nao lembra o que escolheu.Um dia Lembrará.......do quê mesmo?");
        break;

        default: 
        console.log("Opcao Invalida,escolha entre uma das tres opcoes fornecidas")
        break;
}