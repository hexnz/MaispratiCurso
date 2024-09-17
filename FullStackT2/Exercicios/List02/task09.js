/* 9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos. */

const clientes = [
    { nome: 'Junior', idade: 32, cidade: 'Goiania' },
    { nome: 'Lucas', idade: 25, cidade: 'SP' },
    { nome: 'Camila', idade: 45, cidade: 'Fortaleza' },
    { nome: 'Rodolfo', idade: 31, cidade: 'Maceio' },

];

let contagem = 0;
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contagem++;
    }
});

console.log(`Clientes com mais de 30 anos: ${contagem}`);