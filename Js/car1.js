
class Car {

    constructor() {
        this.x = 310; //salida: 310  
        this.y = 480;
        this.w = 60;
        this.h = 110;
        this.speed = 6;
        this.move = 95;
        this.image = new Image();
        this.image.src = ("../Img/Car_Orange.png")

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