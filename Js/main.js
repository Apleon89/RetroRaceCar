// Global Variables

let startScreenDOM = document.querySelector("#start-game");
let startBtnDOM = document.querySelector("#start-game button");
let gameOverScreenDOM = document.querySelector("#game-over");
let restartBtnDOM = document.querySelector("#game-over button");
let audioJuego = document.querySelector(".audio-juego");
let canvasContainer = document.querySelector("#canvas-container");
let canvas = document.querySelector("#canvas")


const context = canvas.getContext('2d');

let game;




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
const startGame = ()=>{

    //Cambio de Pantallas
        startScreenDOM.style.display = "none";
        gameOverScreenDOM.style.display = "none";
        canvasContainer.style.display = "flex";
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
    if(event.code === "ArrowLeft"  && game.carDriver.x > 105){
        game.carDriver.moveLeftCar();
    }
})
window.addEventListener("keydown", (event)=>{
    if(event.code === "ArrowRight" && game.carDriver.x+game.carDriver.w < 495){
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


