class Game {
  constructor() {
    this.isGameOn = true;
    this.bgArr = [new Bg(-15), new Bg(-615)];
    this.wrenchArr = [];
    this.carDriver = new Car();
    this.carArr = [];
    this.crashImg = new CrashImg();
    this.liveUp = new LiveImg();
    this.levelUp = new LevelUp();
    this.lives = 2;
    this.frames = 1;
    this.framesCarAppear;
  }

  clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  highwayMovement = () => {
    if (this.frames % 60 === 0) {
      this.bgArr.push(new Bg(-615));
    } else if (this.bgArr[0].y > 600) {
      this.bgArr.shift();
    }
  };

  enemyCarsAppear = () => {
    let ramdomNumWayCar = Math.round(Math.random() * 4);
    let ramdomNumForColor = Math.round(Math.random() * 6);

    if (Math.floor(this.frames / 50) < 50) {
      this.framesCarAppear = 130;
    } else if (Math.floor(this.frames / 50) > 50) {
      this.framesCarAppear = 100;
    } else if (Math.floor(this.frames / 50) > 100) {
      this.framesCarAppear = 80;
    } else if (Math.floor(this.frames / 50) > 150) {
      this.framesCarAppear = 75;
    }

    let newCar = new EnemyCars(ramdomNumWayCar, ramdomNumForColor);

    if (this.carArr.length === 0 || this.frames % this.framesCarAppear === 0) {
      if (this.carArr.length === 0) {
        this.carArr.push(newCar);
      } else if (
        this.carArr.at(-1).x < newCar.x + newCar.w &&
        this.carArr.at(-1).x + this.carArr.at(-1).w > newCar.x &&
        this.carArr.at(-1).y < newCar.y + newCar.h &&
        this.carArr.at(-1).h + this.carArr.at(-1).y > newCar.y
      ) {
        this.enemyCarsAppear();
      } else {
        this.carArr.push(newCar);
      }
    }
  };

  oldCarsDisappear = () => {
    if (this.carArr[0].y > canvas.height) {
      this.carArr.shift();
    }
  };

  colissionCheck = () => {
    this.carArr.forEach((eachCar, index) => {
      if (
        this.carDriver.x < eachCar.x + eachCar.w &&
        this.carDriver.x + this.carDriver.w > eachCar.x &&
        this.carDriver.y < eachCar.y + eachCar.h &&
        this.carDriver.h + this.carDriver.y > eachCar.y
      ) {
        if(this.liveUp.x !== 150){
          this.crashImg.x = 150;
          let counter = 0;
          let showCrashImg = setInterval(() => {
            counter += 1;
            this.crashImg.x = -300;
            if (counter === 1) {
              clearInterval(showCrashImg);
            }
          }, 300);
        }
        this.carArr.splice(index, 1);
        audioCrash.play();
        this.lives--;
        this.gameOver();
      }
    });
  };

  wrenchAppear = () => {
    let ramdomNumWayWrench = Math.floor(Math.random() * 4);
    if (this.frames % 900 === 0 && this.lives < 4) {
      this.wrenchArr.push(new Wrench(ramdomNumWayWrench));
    }
  };

  wrenchColissionCheck = () => {
    livesCounterDOM.innerText = this.lives;
    this.wrenchArr.forEach((eachWrench, index) => {
      if (
        this.carDriver.x < eachWrench.x + eachWrench.w &&
        this.carDriver.x + this.carDriver.w > eachWrench.x &&
        this.carDriver.y < eachWrench.y + eachWrench.h &&
        this.carDriver.h + this.carDriver.y > eachWrench.y &&
        this.lives < 4
      ) {
        if(this.crashImg.x !== 150){
          this.liveUp.x = 150;
          let counter = 0;
          let showLiveUp = setInterval(() => {
            counter += 1;
            this.liveUp.x = -300;
            if (counter === 1) {
              clearInterval(showLiveUp);
            }
          }, 300);
        }
        this.wrenchArr.splice(index, 1);
        this.lives++;
        audioLiveUp.play();
      }
    });
  };

  oldWrenchDisappear = () => {
    if (this.wrenchArr.length > 3) {
      this.wrenchArr.shift();
    }
  };

  levelUpImgAppear = () => {
    if (
      Math.floor(this.frames / 50) === 50 ||
      Math.floor(this.frames / 50) === 100 ||
      Math.floor(this.frames / 50) === 150
    ) {
      audioLevelUp.play();
      this.levelUp.x = 150;
      let counter = 0;
      let showLevelUp = setInterval(() => {
        counter += 1;
        this.levelUp.x = -300;
        if (counter === 1) {
          clearInterval(showLevelUp);
        }
      }, 10);
    }
  };

  gameOver = () => {
    if (this.lives === 0) {
      this.isGameOn = false;
      audioCrash.pause();
      audioCrash.currentTime = 0;
      audioJuego.pause();
      audioJuego.currentTime = 0;
      canvasContainer.style.display = "none";
      audioGameOver.play();
      gameOverScreenDOM.style.display = "flex";
      scoreGameOver.innerText = `Score: ${scoreDOM.innerText}`;
      maxScoreGameOver.innerText = `Max Score: ${scoreMaxDOM.innerText}`;
    }
  };

  scoreCounter = () => {
    scoreMaxDOM.innerText = localStorage.getItem("maxScore");
    scoreDOM.innerText = Math.floor(this.frames / 50);
    if (scoreDOM.innerText > Number(scoreMaxDOM.innerText)) {
      scoreMaxDOM.innerText = scoreDOM.innerText;
      localStorage.setItem("maxScore", scoreMaxDOM.innerText);
    }
  };

  gameLoop = () => {
    this.frames++;
    //1. Limpiar el canvas
    this.clearCanvas();

    //2. Movimientos del juego

    this.highwayMovement();
    this.bgArr.forEach((eachBg) => {
      eachBg.moveBg();
    });
    this.carDriver.moveUpCar();
    this.carDriver.brakeCar();
    this.enemyCarsAppear();
    this.carArr.forEach((eachCar) => {
      eachCar.moveEnemyCar();
    });
    this.colissionCheck();
    this.wrenchAppear();
    this.wrenchColissionCheck();
    this.wrenchArr.forEach((eachWrench) => {
      eachWrench.moveWrench();
    });
    this.levelUpImgAppear();

    //3. Dibujado de los elementos

    this.bgArr.forEach((eachBg) => {
      eachBg.drawBg();
    });
    this.carDriver.drawCar();
    this.enemyCarsAppear();
    this.carArr.forEach((eachCar) => {
      eachCar.drawEnemyCar();
    });
    this.wrenchArr.forEach((eachWrench) => {
      eachWrench.drawWrench();
    });
    this.oldCarsDisappear();
    this.oldWrenchDisappear();
    this.scoreCounter();
    this.crashImg.drawCrashImg();
    this.liveUp.drawLiveUp();
    this.levelUp.drawLevelUp();

    //4. Recursion

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
