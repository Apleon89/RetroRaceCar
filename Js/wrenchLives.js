class Wrench {

    constructor(posX){
        if(posX === 0){
            this.x = 135
          } else if (posX === 1) {
            this.x = 225
          } else if (posX === 2){
            this.x = 315
          } else if (posX === 3) {
            this.x = 415
          }
        this.y = -50
        this.w = 50
        this.h = 50
        this.speed = 2
        this.image = new Image();
        this.image.src = "../Img/wrench .png"

    }

    drawWrench=()=>{
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
        
    }
    moveWrench=()=>{
        this.y += this.speed
    }
}