class Game {

    constructor() {
        this.isGameOn = true;
        this.bg = new Image();
        this.bg.src = ("../Img/bg-1.png");
        this.carDriver = new Car();
        this.carArr = [];
        this.purpleCarArr = [];
        this.greenCarArr = [];
        this.frames = 1;
    }

    clearCanvas=()=>{
        context.clearRect(0, 0, canvas.width, canvas.height); 
    }
    drawBg=()=>{
        context.drawImage(this.bg, 0, 0, canvas.width, canvas.height);     
    }
    purpleCarsAppear=()=>{
        if(this.purpleCarArr.length === 0 || this.frames % 240 === 0){
            let ramdomNum = Math.floor(Math.random() * 2);
            
            this.purpleCarArr.push(new PurpleCar(ramdomNum));
        }
    }
    greenCarsAppear=()=>{
        if(this.greenCarArr.length === 0 || this.frames % 180 === 0){
            let ramdomNum = Math.floor(Math.random() * 2);
            
            this.greenCarArr.push(new GreenCar(ramdomNum));
        }
    }
    oldCarsDisappear=()=>{
        if(this.purpleCarArr[0].y > 600){
            this.purpleCarArr.shift();
        } else if (this.greenCarArr[0].y > 600){
            this.greenCarArr.shift();
        }
    }
    colissionPurpleCheck=()=>{
        this.purpleCarArr.forEach((eachPurpleCar)=>{
            if(this.carDriver.x < eachPurpleCar.x + eachPurpleCar.w &&
                this.carDriver.x + this.carDriver.w > eachPurpleCar.x &&
                this.carDriver.y < eachPurpleCar.y + eachPurpleCar.h &&
                this.carDriver.h + this.carDriver.y > eachPurpleCar.y){
                    this.gameOver();
                };
        });
    };
    colissionGreenCheck=()=>{
        this.greenCarArr.forEach((eachGreenCar)=>{
            if(this.carDriver.x < eachGreenCar.x + eachGreenCar.w &&
                this.carDriver.x + this.carDriver.w > eachGreenCar.x &&
                this.carDriver.y < eachGreenCar.y + eachGreenCar.h &&
                this.carDriver.h + this.carDriver.y > eachGreenCar.y){
                    this.gameOver();
                };
        });
    };
    gameOver=()=>{
        this.isGameOn = false;

        canvasContainer.style.display = "none";
        gameOverScreenDOM.style.display = "flex";
    };
    



    gameLoop=()=>{
        
        this.frames++
        //1. Limpiar el canvas
        this.clearCanvas();


        //2. Movimientos de los coches
        this.carDriver.moveLeftCar();
        this.carDriver.moveRightCar();

        
        this.purpleCarsAppear();
        this.purpleCarArr.forEach((eachPurpleCar)=>{
            eachPurpleCar.movePurpleCar();
        });
        this.greenCarsAppear();
        this.greenCarArr.forEach((eachGreenCar)=>{
            eachGreenCar.moveGreenCar();
        });
        this.colissionPurpleCheck();
        this.colissionGreenCheck();


        //3. Dibujado de los elementos
        this.drawBg();
        this.carDriver.drawCar();


        this.purpleCarArr.forEach((eachPurpleCar)=>{
            eachPurpleCar.drawPurpleCar();
        });
        this.greenCarArr.forEach((eachGreenCar)=>{
            eachGreenCar.drawGreenCar();
        });
        this.oldCarsDisappear();

        //4. Recursion

        if( this.isGameOn === true ){

            requestAnimationFrame(this.gameLoop)
            }
    }
}