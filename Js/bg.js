class Bg {
    constructor(posY){
        this.y = posY;
        this.speed = 5;
        this.bg = new Image();
        this.bg.src = ("../Img/bg-1.png")
        
    }

    drawBg(){
        context.drawImage(this.bg, 0, this.y, canvas.width, canvas.height+30);
    }
    moveBg(){
        this.y += this.speed;
    }
}