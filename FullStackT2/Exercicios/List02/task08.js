/*8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes. */
const filmes = [
    { titulo:'homem aranha', diretor: 'Sam Raimi', anoLancamento: 2007 },
    { titulo: 'The Matrix', diretor: 'The Wachowskis', anoLancamento: 1999 }
];

const titulos = [];
filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);