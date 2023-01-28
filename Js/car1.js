
class Car {

    constructor() {
        this.x = 305; //salida: 305  
        this.y = 480;
        this.w = 60;
        this.h = 110;
        this.speed = 4;
        this.move = 20;
        this.image = new Image();
        this.image.src = ("../Img/Car_Red.png")

    }

    drawCar=()=>{
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
        
    }

    moveLeftCar=()=>{
        this.x -= this.move;
    }
    moveRightCar=()=> {
        this.x += this.move;
    }
    moveUpCar=()=>{
        // if (this.y >= 450){
        // this.y -= this.speed;
        // }
        this.y -= this.speed;
    }
    moveBottomCar=()=>{
        if(this.y <= 480){
            this.y += 0.3
        }
    }
    
}