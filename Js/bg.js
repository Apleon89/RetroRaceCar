class Bg {
  constructor(posY) {
    this.y = posY;
    this.speed;
    this.bg = new Image();
    this.bg.src = "./Img/bg-1.png";
  }

  drawBg = () => {
    context.drawImage(this.bg, 0, this.y, canvas.width, canvas.height + 30);
  };
  moveBg = () => {
    this.speed = 10;
    this.y += this.speed;
  };
}
