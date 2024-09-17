/*7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/


const produtos = [
    { nome: 'Cadeira de Escritorio', preco: 200 },
    { nome: 'Cadeira Gamer', preco: 500}]

produtos.forEach(produto => {
    let desconto=10/100;
    produto.preco -= produto.preco * desconto;
    console.log(`Novo preço de ${produto.nome} ${produto.preco}`);
});
