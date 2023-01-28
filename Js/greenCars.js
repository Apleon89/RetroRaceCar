
class GreenCar {

    constructor(posX) {
          if(posX === 1){
            this.x = 310
          } else {
            this.x = 130
          };
        this.y = -110;
        this.w = 60;
        this.h = 110;
        this.speed = 2;
        this.move = 10;
        this.image = new Image();
        this.image.src = ("../Img/Car_Green.png")

    }

    drawGreenCar=()=>{
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
        
    }
    moveGreenCar=()=> {
        this.y += this.speed;
    }
}