/*Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

const pedidos = [
    { cliente: 'Ana', produto: 'Escova de cabelo', quantidade: 2 },
    { cliente: 'Ana', produto: 'Sabonete feminino', quantidade: 1 },
    { cliente: 'João', produto: 'Desodorante', quantidade: 5 },
    { cliente: 'João', produto: 'Detergente', quantidade: 2 },
];

const pedidosCliente = {};
pedidos.forEach(pedido => {
    if (!pedidosCliente[pedido.cliente]) {
        pedidosCliente[pedido.cliente] = 0;
    }
    pedidosCliente[pedido.cliente] += pedido.quantidade;
});


console.log(pedidosCliente);
