/* 3. Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades. */

const produto = {
    nome: 'Relogio G-Shock',
    preco: 140,
    estoque: 15,
    desconto: 20
};

function filtrarPropriedades(obj, menorValor) {
    const resultado = {};
    for (const propriedade in obj) {
        if (obj[propriedade] > menorValor) {
            resultado[propriedade] = obj[propriedade];
        }
    }
    return resultado;
}

console.log(filtrarPropriedades(produto, 100));