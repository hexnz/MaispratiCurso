/* 2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto. */


const livro = {
    titulo: 'As aventuras de Sherlock Holmes',
    autor: 'Arthur Conan Doyle',
    anoPublicacao: 1982,
    genero: 'Ciencia,ação e estrategia'
};

if (!('editora' in livro)) {
    livro.editora = 'Editora +Livros';
    livro.classificacaoEtaria='14+'
}

console.log(" Dados sobre o livro: "+livro);
console.log(livro);
