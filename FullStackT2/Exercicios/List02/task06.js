/* 6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico. */

const funcionarios = [
    { nome: 'Beto', cargo: 'Gerente de Projetos', salario: 10000 },
    { nome: 'Juquinha', cargo: 'Design', salario: 3500 },
    { nome: 'Lucas', cargo: 'Desenvolvedora', salario: 4001 }
];

const valorLimite = 4000;

for (const funcionario of funcionarios) {
    if (funcionario.salario > valorLimite) {
        console.log(funcionario);
    }
}