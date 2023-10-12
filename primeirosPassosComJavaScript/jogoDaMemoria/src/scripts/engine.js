const emojis = [
    "😱",
    "😱",
    "😡",
    "😡",
    "💵",
    "💵",
    "🤡",
    "🤡",
    "👹",
    "👹",
    "😺",
    "😺",
    "🙈",
    "🙈",
    "🦊",
    "🦊"

];
let openCards = [];

let shuffleEmojis = emojis.sort(()=>(Math.random()>0.5) ? 2: -1)

var hh = 0;
var mm = 0;
var ss = 0;
var tempo = 1000; //Quantos milésimos valem 1 segundo?
var cron;
var matchTime; //variável para receber o tempo final da tentativa e exibir no alert
let state = 0; /* 0 o jogo não começou, 1 o jogo está rodando */

for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;        
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if (state === 1) {
        if (openCards.length < 2) {
            this.classList.add("boxOpen");
            openCards.push(this);
        }
    
        if (openCards.length ===2) {
            setTimeout(checkMatch, 500);
        }
        
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];
    victoryCondition();
}

function victoryCondition(){
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert(`Você venceu !\nSeu tempo foi\n ${matchTime}`);
        window.location.reload()
    }
}



function timer() {
    ss++; //Incrementa +1 na variável ss
    
    if (ss == 60) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm
        
        if (mm == 60) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }
    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    
    //Insere o valor tratado no elemento reset
    document.querySelector('.reset').innerText = format;
    
    //Retorna o valor tratado
    matchTime = format;
    return format;
}


function timeAttack(){
    // let button = document.querySelector(".reset");


    if (state === 0) {
        state= 1;
        cron = setInterval(() => { timer(); }, tempo);
    }else if (state === 1){
        state = 0;

        victoryCondition();
        
        clearInterval(cron);
        hh = 0;
        mm = 0;
        ss = 0;

        document.querySelector('.reset').innerText = 'START GAME';
        window.location.reload()

    }
}