const pessoas = [
    { nome: 'Renan', idade: 27, cidade: 'Fortaleza' },
    { nome: 'João', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Maria', idade: 15, cidade: 'Sao Paulo' }
];

for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
