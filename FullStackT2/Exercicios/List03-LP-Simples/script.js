
const inserirNumAleat = document.getElementsByClassName("animationMatrix");
const cardClick = document.getElementById('cartao');
const cardClick02 = document.getElementById('cartao02');
const tagP =document.querySelectorAll('p');
const tagMain=document.getElementsByTagName('main')[0];
const tagAboutMe=document.getElementById("aboutMeLink")


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function flip() {
    console.log("debugggg");
    if (cardClick.style.transform === '' || cardClick.style.transform === 'rotateY(0deg)') {
        cardClick.style.transform = 'rotateY(180deg)';
    } else {
        cardClick.style.transform = 'rotateY(0deg)';
        
    }
}
function flip2() {
    if (cardClick02.style.transform === '' || cardClick02.style.transform === 'rotateY(0deg)') {
        cardClick02.style.transform = 'rotateY(180deg)';
    } else {
        cardClick02.style.transform = 'rotateY(0deg)';
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
    // Altera a cor dos elementos <p> de verde para azul e vice-versa
    tagP.forEach(p => {
        if (p.style.color === 'rgb(67, 190, 43)' || p.style.color==='' || p.style.color=='') { // Verde
            p.style.color = ' rgb(0, 217, 255)'; // Troca para azul
           
        } else {
            p.style.color = 'rgb(67, 190, 43)'; // Troca para verde
        }
    });
});
cardClick02.addEventListener('click', (e) => { 
    flip2(); // Chama a função de flip

    
    tagP.forEach(p => {
        if (p.style.color === 'rgb(67, 190, 43)' || p.style.color==='' || p.style.color=='yellow') { // Verde
            p.style.color = 'rgb(217, 190, 823)'; // Troca para azul
           
        } else {
            p.style.color = 'yellow'; // Troca para verde
        }
    });
   
});
tagAboutMe.addEventListener("click", (e) => {
  
});
