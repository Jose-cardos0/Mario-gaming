const mario = document.querySelector(".mario"); //seleção da img do tubo
const pipe = document.querySelector(".pipe"); //seleção da img do mario

const jump = () => {    //função anonima para pular
    mario.classList.add("jump")   //adicionar uma class ao img mario no html

    setTimeout(() => {  //a cada 500ms remove a class jump do img mario no html

        mario.classList.remove("jump");  

    },500);
}

const loop = setInterval(() => {  //funcao anonima para o gameover



    const pipePosition = pipe.offsetLeft; //selecciona o img do tubo, coloca um .offsetLeft ou seja ele deve parar quando tiver a 110px da borda lefet
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", ""); //para selecionar a img do mario precisa usar o getcomputedstyle


    if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 80) {   //
        
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px` //quando o mario topar no tubo, ele para exatamente na posição que topou
        
        mario.src = "./img/mariogame/game-over.png";  //trocar a imagem do mario para morto
        mario.style.width = "80px"
        mario.style.marginLeft = "50px"

        clearInterval(loop);  //quando acabar o jogo limpar o loop
   
    }


} ,10);


document.addEventListener("keydown", jump);   //evento de apertar qualquer tecla o mario pula (observe que se remete a funcao anonima jump na linha 4)

