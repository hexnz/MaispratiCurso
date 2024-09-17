/*○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */
const vendas = [
    { produto: 'Chinela Havaina', quantidadeVendida: 10, valor: 30 },
    { produto: 'Chinela Havaina Plus', quantidadeVendida: 5, valor: 50 }
];

let valorTotal = 0;
vendas.forEach(venda => {
    valorTotal += venda.quantidadeVendida * venda.valor;
});

console.log(`Valor total de vendas: ${valorTotal} Reais`);