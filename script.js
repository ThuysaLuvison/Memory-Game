const imagens = [
    'img1.png', 'img2.png', 'img3.png', 'img4.png','img5.png', 'img6.png', 'img7.png', 'img8.png', 'img1.png', 'img2.png', 'img3.png', 'img4.png',
    'img5.png', 'img6.png', 'img7.png', 'img8.png' 
];

const embaralhadas = imagens.sort(() => 0.5 - Math.random());
const tabuleiro = document.getElementById("tabuleiro");

embaralhadas.forEach(src => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="front"></div>
    <div class="back" style="background-image: url('assets/${src}')"></div>
    `;
    tabuleiro.appendChild(card);
});

let primeiraCarta = null;
let segundaCarta = null;
let travado = false;

tabuleiro.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card || card.classList.contains("flip") || travado) return;

    card.classList.add("flip");

    if (!primeiraCarta){
        primeiraCarta = card;
    }
    else{
        segundaCarta = card;
        travado = true;
    
        const img1 = primeiraCarta.querySelector(".back").style.backgroundImage;
        const img2 = segundaCarta.querySelector(".back").style.backgroundImage;

        if (img1 === img2) {
            primeiraCarta = null;
            segundaCarta = null;
            travado = false;
        }
        else {
            setTimeout(() => {
               primeiraCarta.classList.remove("flip");
               segundaCarta.classList.remove("flip");
               primeiraCarta = null;
               segundaCarta = null;
               travado = false; 
            }, 1000);
        }
    }
});