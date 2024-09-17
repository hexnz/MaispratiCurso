/* Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades. */



const estoque = [
    { produto: 'Dorflex', quantidade: 7, minimo: 10 },
    { produto: 'Dipirona', quantidade: 22, minimo: 11 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);