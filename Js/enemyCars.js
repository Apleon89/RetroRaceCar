
class EnemyCars {

    constructor(posX, color) {
          if(posX === 0){
            this.x = 130
          } else if (posX === 1) {
            this.x = 220
          } else if (posX === 2){
            this.x = 310
          } else if (posX === 3) {
            this.x = 410
          }
        this.y = -110;
        this.w = 60;
        this.h = 110;
        if(this.x === 130){
            this.speed = 1.5;
        } else if (this.x === 220) {
            this.speed = 2;
        } else if(this.x === 310){
            this.speed = 2.2;
        } else {
            this.speed = 2.5
        }
        this.image = new Image();
        if(color === 0) {
            this.image.src = ("../Img/Car_Purple.png");
        } else if (color === 1) {
            this.image.src = ("../Img/Car_Green.png"); 
        } else {
            this.image.src= ("../Img/Car_Red.png");
        }

    }

    drawEnemyCar=()=>{
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
        
    }
    moveEnemyCar=()=> {
        this.y += this.speed;
    }
}