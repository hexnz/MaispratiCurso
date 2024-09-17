/* 5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média. */

const alunos = [
    { nome: 'Antonio', nota1: 9.5, nota2: 8.4 },
    { nome: 'Rafael', nota1: 2.4, nota2: 7.2 },
    { nome: 'Vinicios', nota1: 7.5, nota2: 8.5 }
];

for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome} - Média: ${media}`);
}