
class PurpleCar {

    constructor(posX) {
          if(posX === 1){
            this.x = 410
          } else {
            this.x = 220  // 120 pos mas baja
          };
        this.y = -110;
        this.w = 60;
        this.h = 110;
        this.speed = 2.5;
        this.move = 10;
        this.image = new Image();
        this.image.src = ("../Img/Car_Purple.png")

    }

    drawPurpleCar=()=>{
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
        
    }
    movePurpleCar=()=> {
        this.y += this.speed;
    }
}