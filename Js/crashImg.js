class CrashImg {
  constructor() {
    this.x = -600;
    this.y = 0;
    this.w = 600;
    this.h = 600;
    this.image = new Image();
    this.image.src = "./Img/crash.png";
  }

  drawCrashImg = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
