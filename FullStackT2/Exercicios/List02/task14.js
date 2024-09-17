/* Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */
const empresa = {
    departamentos: [
        { nome: 'TI', funcionarios: ['Marcelo', 'Carlos'] },
        { nome: 'Controle de Qualidade', funcionarios: ['Sandro', 'Alicia'] }
    ]
};

for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento}`);
    for (const funcionario of departamento.nome) {
        console.log(` - Funcionário: ${funcionario}`);
    }
}