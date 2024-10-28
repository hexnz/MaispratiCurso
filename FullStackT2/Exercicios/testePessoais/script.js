const add = document.getElementById("add");
const list = document.createElement('li');
const listaC=document.getElementsByTagName("li")
const nomeFrutaInput = document.getElementById('iptFruta');
const arrayDom = [];



console.log(listaC)


add.addEventListener('click', (e) => {
    e = nomeFrutaInput.value;
    adicionarElementoLista(e);

})





function adicionarElementoLista(element) {
    list.innerHTML = element;
   length.listaC.app

}
function removerElemento() {

}