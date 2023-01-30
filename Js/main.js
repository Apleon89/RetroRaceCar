// Global Variables

let startScreenDOM = document.querySelector("#start-game");
let startBtnDOM = document.querySelector("#start-game button");
let gameOverScreenDOM = document.querySelector("#game-over");
let restartBtnDOM = document.querySelector("#game-over button");
let audioJuego = document.querySelector(".audio-juego");
let audioCrash = document.querySelector(".audio-choque");
let audioGameOver = document.querySelector(".audio-game-over");
let audioLiveUp = document.querySelector(".audio-live");
let scoreDOM = document.querySelector("#score span");
let scoreMaxDOM = document.querySelector("#max-score span");
let livesCounterDOM = document.querySelector("#lives span");
let totalScoreGameOverDOM = document.querySelector("#totalScore");
let muteDivDOM = document.querySelector("#btn-mute");
let allAudioDOM = document.querySelectorAll("audio");
let canvasContainer = document.querySelector("#canvas-container");
let canvas = document.querySelector("#canvas")

const context = canvas.getContext('2d');

let game;

//Audio Volume 
audioJuego.volume = 0.03;
audioCrash.volume = 0.05;
audioGameOver.volume = 0.02;
audioLiveUp.volume = 0.05;

// DOM manipulation
let scoreGameOver = document.createElement("p");
totalScoreGameOverDOM.append(scoreGameOver);
let maxScoreGameOver = document.createElement("p");
totalScoreGameOverDOM.append(maxScoreGameOver);

let muteBtnDOM = document.createElement("input");
muteDivDOM.append(muteBtnDOM)
muteBtnDOM.type = "image";
muteBtnDOM.src = ("../Img/Sound On.png");
muteBtnDOM.onclick = "mute()";
let instruccionsDivDOM = document.createElement("div");
startScreenDOM.append(instruccionsDivDOM);
let gameInstruccions = document.createElement("h4");
instruccionsDivDOM.append(gameInstruccions);
gameInstruccions.innerText = "Instructions:"
let leftRightInstruccions = document.createElement("p");
instruccionsDivDOM.append(leftRightInstruccions);
leftRightInstruccions.innerText = "Press ⇦ ⇨ to move left & right.";
let gasBreakInstruccions = document.createElement("p");
instruccionsDivDOM.append(gasBreakInstruccions);
gasBreakInstruccions.innerText = "Press ⇧ ⇩ to acelerate & break."
let pauseInstruccions = document.createElement("p");
instruccionsDivDOM.append(pauseInstruccions);
pauseInstruccions.innerText = "Press P to Pause."

let restartInstruccions = document.createElement("p");
restartInstruccions.innerText = "...or press Space to restart";
restartInstruccions.classList.add("instruccions");
gameOverScreenDOM.append(restartInstruccions);




// State Management Functions
pause =()=>{
    if(game.isGameOn === true){
        game.isGameOn = false
        audioJuego.pause();
    } else {
        game.isGameOn = true;
        game.gameLoop();
        audioJuego.play();
    }
}
mute =()=>{
    if (audioJuego.volume === 0.01) {
        audioJuego.volume = 0.00;
        audioCrash.volume = 0.00;
        audioGameOver.volume = 0.00;
        audioLiveUp.volume = 0.00;
        muteBtnDOM.src = ("../Img/Sound Off.png");
    } else {
        audioJuego.volume = 0.03;
        audioCrash.volume = 0.05;
        audioGameOver.volume = 0.02;
        audioLiveUp.volume = 0.05;
        muteBtnDOM.src = ("../Img/Sound On.png");
    }
}

const startGame = ()=>{

    //Cambio de Pantallas
        startScreenDOM.style.display = "none";
        gameOverScreenDOM.style.display = "none";
        canvasContainer.style.display = "flex";
        audioGameOver.pause();
        audioGameOver.currentTime = 0;
        audioJuego.play();
    // Crear el juego
    game = new Game();

    // Iniciar el juego
    game.gameLoop();
}




// Add Event Listeners

// Start Game
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", (event)=>{
    if(event.code === "Space" && canvasContainer.style.display === "none"){
        startGame();
        game.purpleCarArr = [];
        game.greenCarArr = [];
        game.frames = 1;
    }
})

// Controls Car Left & Right
window.addEventListener("keydown", (event)=>{
    if(event.code === "ArrowLeft"  && game.carDriver.x > 130){
        game.carDriver.moveLeftCar();
    }
})
window.addEventListener("keydown", (event)=>{
    if(event.code === "ArrowRight" && game.carDriver.x+game.carDriver.w < 410){
        game.carDriver.moveRightCar();
    }
})

// Aceleration
window.addEventListener("keydown", (event)=>{
    if(event.code === "ArrowUp"){
        // game.bgArr.forEach(eachBb => {
        //     eachBb.addBgVelocity()
        // });
        game.carDriver.moveUpCar();
    } 
})
// Deceleration
window.addEventListener("keydown", (event)=>{
    if(event.code === "ArrowDown" && game.carDriver.y <= 480) {
        game.carDriver.y += game.carDriver.speed;
    }
})

// Pause
window.addEventListener("keydown", (event)=>{
    if(event.code === "KeyP"){
        pause();
    }
});

// Mute
muteBtnDOM.addEventListener("click", mute)

// Local Storage
let maxScore;
localStorage.setItem(maxScore, scoreMaxDOM.innerText);

