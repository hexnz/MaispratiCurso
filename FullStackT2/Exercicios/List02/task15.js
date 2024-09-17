
/* 
15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas. */

const transacoes = [
    { tipo: 'entrada', valor: 100 },
    { tipo: 'saída', valor: 300 },
    { tipo: 'entrada', valor: 200 },
    { tipo: 'saída', valor: 75 }
];

let saldo = 0;
transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldo += transacao.valor;
    } 
    else if (transacao.tipo === 'saída') {
        saldo -=transacao.valor;
    }

})
if(saldo<=0){

    console.log("O banco está falindo.....")
}
console.log(saldo);