// Global Variables

let startScreenDOM = document.querySelector("#start-game");
let startBtnDOM = document.querySelector("#start-game button");
let gameOverScreenDOM = document.querySelector("#game-over");
let restartBtnDOM = document.querySelector("#game-over button");
let audioJuego = document.querySelector(".audio-juego");
let audioCrash = document.querySelector(".audio-choque");
let audioGameOver = document.querySelector(".audio-game-over");
let audioLiveUp = document.querySelector(".audio-live");
let audioLevelUp = document.querySelector(".audio-level-up");
let scoreDOM = document.querySelector("#score span");
let scoreMaxDOM = document.querySelector("#max-score span");
let livesCounterDOM = document.querySelector("#lives span");
let totalScoreGameOverDOM = document.querySelector("#totalScore");
let muteDivDOM = document.querySelector("#btn-mute");
let allAudioDOM = document.querySelectorAll("audio");
let canvasContainer = document.querySelector("#canvas-container");
let canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
let game;

//Audio Volume

audioJuego.volume = localStorage.getItem("volume");
audioCrash.volume = localStorage.getItem("volume");
audioGameOver.volume = localStorage.getItem("volume");
audioLiveUp.volume = localStorage.getItem("volume");
audioLevelUp.volume = localStorage.getItem("volume");

// DOM manipulation

let scoreGameOver = document.createElement("p");
totalScoreGameOverDOM.append(scoreGameOver);
let maxScoreGameOver = document.createElement("p");
totalScoreGameOverDOM.append(maxScoreGameOver);

let muteBtnDOM = document.createElement("input");
muteDivDOM.append(muteBtnDOM);
muteBtnDOM.type = "image";
console.log(localStorage.getItem("volume"))
if (localStorage.getItem("volume") === "0.05") {
  muteBtnDOM.src = "./Img/SoundOn.png";
} else {
  muteBtnDOM.src = "./Img/SoundOff.png";
}
let instruccionsDivDOM = document.createElement("div");
startScreenDOM.append(instruccionsDivDOM);
let gameInstruccions = document.createElement("h4");
instruccionsDivDOM.append(gameInstruccions);
gameInstruccions.innerText = "Instructions:";
let leftRightInstruccions = document.createElement("p");
instruccionsDivDOM.append(leftRightInstruccions);
leftRightInstruccions.innerText = "Press ⇦ ⇨ to move left & right.";
let gasBreakInstruccions = document.createElement("p");
instruccionsDivDOM.append(gasBreakInstruccions);
gasBreakInstruccions.innerText = "Press ⇧ ⇩ to acelerate & brake.";
let pauseInstruccions = document.createElement("p");
instruccionsDivDOM.append(pauseInstruccions);
pauseInstruccions.innerText = "Press P to Pause & press M to mute audio.";

let restartInstruccions = document.createElement("p");
restartInstruccions.innerText = "...or press Space to restart";
restartInstruccions.classList.add("instruccions");
gameOverScreenDOM.append(restartInstruccions);

// State Management Functions

pause = () => {
  if (game.isGameOn === true) {
    game.isGameOn = false;
    audioJuego.pause();
  } else {
    game.isGameOn = true;
    game.gameLoop();
    audioJuego.play();
  }
};
mute = () => {
  if (audioJuego.volume !== 0.0) {
    audioJuego.volume = 0.0;
    audioCrash.volume = 0.0;
    audioGameOver.volume = 0.0;
    audioLiveUp.volume = 0.0;
    audioLevelUp.volume = 0.0;
    muteBtnDOM.src = "./Img/SoundOff.png";
    localStorage.setItem("volume", 0.0);
  } else {
    audioJuego.volume = 0.05;
    audioCrash.volume = 0.05;
    audioGameOver.volume = 0.05;
    audioLiveUp.volume = 0.05;
    audioLevelUp.volume = 0.05;
    muteBtnDOM.src = "./Img/SoundOn.png";
    localStorage.setItem("volume", 0.05);
  }
};

const startGame = () => {
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
};

// Add Event Listeners

// Start Game
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
  if (event.code === "Space" && canvasContainer.style.display === "none") {
    game.purpleCarArr = [];
    game.greenCarArr = [];
    game.frames = 1;
    startGame();
  }
});

// Controls Car Left & Right
window.addEventListener("keydown", (event) => {
  if (
    (event.code === "ArrowLeft" || event.code === "KeyA") &&
    game.carDriver.x > 130
  ) {
    game.carDriver.moveLeftCar();
  }
});
window.addEventListener("keydown", (event) => {
  if (
    (event.code === "ArrowRight" || event.code === "KeyD") &&
    game.carDriver.x + game.carDriver.w < 410
  ) {
    game.carDriver.moveRightCar();
  }
});

// Aceleration
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp" || event.code === "KeyW") {
    game.carDriver.pressedUp = true;
  }
});
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp" || event.code === "KeyW") {
    game.carDriver.pressedUp = false;
  }
});
// Deceleration
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowDown" || event.code === "KeyS") {
    game.carDriver.pressedBottom = true;
  }
});
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowDown" || event.code === "KeyS") {
    game.carDriver.pressedBottom = false;
  }
});

// Pause
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyP") {
    pause();
  }
});

// Mute
muteBtnDOM.addEventListener("click", mute);
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyM") {
    mute();
  }
});

// Local Storage
if (localStorage.getItem("maxScore") === undefined) {
  localStorage.setItem("maxScore", 0);
}
if (localStorage.getItem("volume") === undefined) {
  localStorage.setItem("volume", 0.05);
}
