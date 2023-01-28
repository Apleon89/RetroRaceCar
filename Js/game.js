class Game {

    constructor() {
        this.isGameOn = true;
        // this.bg = new Image();
        // this.bg.src = ("../Img/bg-1.png");
        this.bgArr = [new Bg(-15), new Bg(-615)];
        this.wrenchArr = [];
        this.carDriver = new Car();
        this.carArr = [];
        this.purpleCarArr = [];
        this.greenCarArr = [];
        this.lives = 2;
        this.frames = 1;
        
    }

    clearCanvas=()=>{
        context.clearRect(0, 0, canvas.width, canvas.height); 
    }
    // drawBg=()=>{
    //     context.drawImage(this.bg, 0, 0, canvas.width, canvas.height);     
    // }
    highwayMovement =()=>{
        if(this.frames % 60 === 0){
            this.bgArr.push(new Bg(-615))
            
        } else if( this.bgArr[0].y > 600){
            this.bgArr.shift();
        }
    }
    
    // purpleCarsAppear=()=>{
    //     if(this.purpleCarArr.length === 0 || this.frames % 240 === 0){
    //         let ramdomNum = Math.floor(Math.random() * 2);
            
    //         this.purpleCarArr.push(new PurpleCar(ramdomNum));
    //     }
    // }

    // greenCarsAppear=()=>{
    //     if(this.greenCarArr.length === 0 || this.frames % 180 === 0){
    //         let ramdomNum = Math.floor(Math.random() * 2);
            
    //         this.greenCarArr.push(new GreenCar(ramdomNum));
    //     }
    // }
    enemyCarsAppear=()=>{
        let ramdomNumForFrame = Math.floor(Math.random() * 2);
        let ramdomNumWayCar = Math.floor(Math.random() * 4);
        // let ramdomNumForSpeed = Math.floor(Math.random() * 2);
        let ramdomNumForColor = Math.floor(Math.random() * 2);
        let framesCarAppear;
        
        if(ramdomNumForFrame === 0){
            framesCarAppear = 240
        } else {
            framesCarAppear = 180
        };

        if(this.carArr.length === 0 || this.frames % framesCarAppear === 0) {
            this.carArr.push(new EnemyCars(ramdomNumWayCar, ramdomNumForColor));
        };
        
    };
    oldCarsDisappear=()=>{
        // if(this.purpleCarArr[0].y > 600){
        //     this.purpleCarArr.shift();
        // } else if (this.greenCarArr[0].y > 600){
        //     this.greenCarArr.shift();
        // }
        if(this.carArr[0].y > 600){
            this.carArr.shift();
        } 
    }
    // colissionPurpleCheck=()=>{
    //     this.purpleCarArr.forEach((eachPurpleCar)=>{
    //         if(this.carDriver.x < eachPurpleCar.x + eachPurpleCar.w &&
    //             this.carDriver.x + this.carDriver.w > eachPurpleCar.x &&
    //             this.carDriver.y < eachPurpleCar.y + eachPurpleCar.h &&
    //             this.carDriver.h + this.carDriver.y > eachPurpleCar.y){
    //                 this.gameOver();
    //             };
    //     });
    // };
    // colissionGreenCheck=()=>{
    //     this.greenCarArr.forEach((eachGreenCar)=>{
    //         if(this.carDriver.x < eachGreenCar.x + eachGreenCar.w &&
    //             this.carDriver.x + this.carDriver.w > eachGreenCar.x &&
    //             this.carDriver.y < eachGreenCar.y + eachGreenCar.h &&
    //             this.carDriver.h + this.carDriver.y > eachGreenCar.y){
    //                 this.gameOver();
    //             };
    //     });
    // };
    colissionCheck=()=>{
        this.carArr.forEach((eachCar, index)=>{
            if(this.carDriver.x < eachCar.x + eachCar.w &&
                this.carDriver.x + this.carDriver.w > eachCar.x &&
                this.carDriver.y < eachCar.y + eachCar.h &&
                this.carDriver.h + this.carDriver.y > eachCar.y){
                    this.lives -= 1;
                    this.carArr.splice(index,1);
                    this.gameOver();
                };
        });
    };
    wrenchAppear=()=>{
        let ramdomNumWayWrench = Math.floor(Math.random() * 4);
        if(this.frames % 300 === 0){
            this.wrenchArr.push(new Wrench(ramdomNumWayWrench))
        }
    }
    wrenchColissionCheck=()=>{
        livesCounterDOM.innerText = this.lives
        this.wrenchArr.forEach((eachWrench, index)=>{
            if(this.carDriver.x < eachWrench.x + eachWrench.w &&
                this.carDriver.x + this.carDriver.w > eachWrench.x &&
                this.carDriver.y < eachWrench.y + eachWrench.h &&
                this.carDriver.h + this.carDriver.y > eachWrench.y && this.lives < 4){
                    this.wrenchArr.splice(index,1);
                    this.lives++
                    console.log(this.lives)
                  
                }
        })
    };
    oldWrenchDisappear=()=>{
        if(this.wrenchArr.length > 3){
            this.wrenchArr.shift();
            console.log(this.wrenchArr.length)
        } 
    }
    
    gameOver=()=>{
        console.log(this.lives)
        if(this.lives === 0){
            this.isGameOn = false;
            audioJuego.pause();
            canvasContainer.style.display = "none";
            gameOverScreenDOM.style.display = "flex"; 
        }
        
    };
    scoreCounter=()=>{
        scoreDOM.innerText = Math.floor(this.frames / 50);
        if(scoreDOM.innerText > Number(scoreMaxDOM.innerText)){
            scoreMaxDOM.innerText = scoreDOM.innerText;
        }
    };



    gameLoop=()=>{
        
        this.frames++
        //1. Limpiar el canvas
        this.clearCanvas();


        //2. Movimientos del juego

        this.highwayMovement();
        this.bgArr.forEach((eachBg)=>{
            eachBg.moveBg();
        })

        this.carDriver.moveLeftCar();
        this.carDriver.moveRightCar();
        this.carDriver.moveBottomCar();

        
        // this.purpleCarsAppear();
        // this.purpleCarArr.forEach((eachPurpleCar)=>{
        //     eachPurpleCar.movePurpleCar();
        // });
        // this.greenCarsAppear();
        // this.greenCarArr.forEach((eachGreenCar)=>{
        //     eachGreenCar.moveGreenCar();
        // });
        // this.colissionPurpleCheck();
        // this.colissionGreenCheck();

        this.enemyCarsAppear();
        this.carArr.forEach((eachCar)=>{
            eachCar.moveEnemyCar();
        });
        this.colissionCheck();
        this.wrenchAppear();
        this.wrenchColissionCheck();
        this.wrenchArr.forEach((eachWrench)=>{
            eachWrench.moveWrench()
        })
        this.oldWrenchDisappear();

        //3. Dibujado de los elementos

        // this.drawBg();
        this.bgArr.forEach((eachBg)=>{
            eachBg.drawBg();
        })

        this.carDriver.drawCar();


        // this.purpleCarArr.forEach((eachPurpleCar)=>{
        //     eachPurpleCar.drawPurpleCar();
        // });
        // this.greenCarArr.forEach((eachGreenCar)=>{
        //     eachGreenCar.drawGreenCar();
        // });
        this.enemyCarsAppear();
        this.carArr.forEach((eachCar)=>{
            eachCar.drawEnemyCar();
        });
        this.wrenchArr.forEach((eachWrench)=>{
            eachWrench.drawWrench();
        })
        this.oldCarsDisappear();
        this.scoreCounter();

        //4. Recursion

        if( this.isGameOn === true ){

            requestAnimationFrame(this.gameLoop)
            }
    }
}