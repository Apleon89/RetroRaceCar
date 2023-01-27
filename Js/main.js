// Global Variables

let startScreenDOM = document.querySelector("#start-game");
let startBtnDOM = document.querySelector("#start-game button");
let gameOverScreenDOM = document.querySelector("#game-over");
let restartBtnDOM = document.querySelector("#game-over button");
let canvasContainer = document.querySelector("#canvas-container");
let canvas = document.querySelector("#canvas")

const context = canvas.getContext('2d');

let game;




// State Management Functions

const startGame = ()=>{

    //Cambio de Pantallas
        startScreenDOM.style.display = "none";
        canvasContainer.style.display = "flex";
    // Crear el juego


    // Iniciar el juego
}




// Add Event Listeners


startBtnDOM.addEventListener("click", startGame);