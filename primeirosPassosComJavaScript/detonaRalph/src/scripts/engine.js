

const state = {
    view: {
        squares: document.querySelectorAll(".square"), 
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#lives"),
        endingMessage: document.querySelector(".endMessage"),
    },
    values: {        
        hitPosition: 0,
        result: 0,
        currentTime: 6,
        livesLeft: 3,
        activeBGM: 0,
    },
    actions: {
        timerId:setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
        
    }
};

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent=state.values.currentTime;

    if (state.values.currentTime <= 0){
        clearInterval(state.actions.timerId);
        clearInterval(state.actions.countDownTimerId); 
        gameOver()
    }
}

function gameOver(){
    playSound("gameOver.mp3");
    state.view.endingMessage.style.visibility = "visible"
    state.view.endingMessage.innerHTML = `Game Over!<br><br> Sua pontuação foi ${state.values.result}`;
}

function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}`);
    audio.volume = 0.2;
    audio.play();
}

function randomSquare(){
    state.view.squares.forEach((square)=> {
        square.classList.remove("enemy");
    })

    let randomNumber = Math.floor(Math.random() *9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox(){
    state.view.squares.forEach((square)=> {
        square.addEventListener("mousedown", ()=>{
            if (square.id === state.values.hitPosition){
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit.m4a");
            }else {
                playSound("miss.mp3")
                state.values.livesLeft--;
                state.view.lives.textContent = "X"+ state.values.livesLeft;
                if (state.values.livesLeft <= 0){gameOver()}
            }
        })
    });
}

function controlBGM (){
    const button = document.getElementById("BGM");
    button.addEventListener("click", ()=>{
        let BGM = new Audio (`./src/audios/BGM.mp3`)
        if (state.values.activeBGM === 0){
            BGM.volume = 0.1;
            BGM.play();
            BGM.loop = true;
            state.values.activeBGM = 1;
            button.img.src="./src/images/soundOn.png";
        }else{
            BGM.pause();
            state.values.activeBGM = 0;
            button.img.src="./src/images/soundOff.png";
        }
    })
}
function initialize() {
    controlBGM();
    addListenerHitBox();
    
}

initialize();