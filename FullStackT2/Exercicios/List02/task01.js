/* 1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console. */



const carro = {
    marca: 'Toyota',
    modelo: 'Hilux',
    ano: 2022,
    cor: 'vermelho'
};

for (const propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}