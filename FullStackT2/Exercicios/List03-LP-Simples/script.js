
const inserirNumAleat = document.getElementsByClassName("animationMatrix");
const cardClick = document.getElementById('cartao');
const tagP =document.querySelectorAll('p');
const tagMain=document.getElementsByTagName('main')[0];



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function flip() {
    if (cardClick.style.transform === '' || cardClick.style.transform === 'rotateY(0deg)') {
        cardClick.style.transform = 'rotateY(180deg)';
    } else {
        cardClick.style.transform = 'rotateY(0deg)';
        
    }
}

// Converte a coleção em um array
Array.from(inserirNumAleat).forEach(elemento => {
    const aleatNumber = getRandomInt(2, 4); // Gera um número aleatório entre 5 e 18
    elemento.style.transform =`translateY(${aleatNumber}rem)`; // Aplica a transformação
   
});

// Adiciona o evento de clique
cardClick.addEventListener('click', (e) => { 
    flip(); // Chama a função de flip

console.log("Cartão clicado!"); // Debugging
    // Altera a cor dos elementos <p> de verde para azul e vice-versa
    tagP.forEach(p => {
        if (p.style.color === 'rgb(67, 190, 43)' || p.style.color==='') { // Verde
            p.style.color = ' rgb(0, 217, 255)'; // Troca para azul
           
        } else {
            p.style.color = 'rgb(67, 190, 43)'; // Troca para verde
        }
    });
});
