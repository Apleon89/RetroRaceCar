class LiveImg {
  constructor() {
    this.x = -300;
    this.y = 150;
    this.w = 300;
    this.h = 300;
    this.image = new Image();
    this.image.src = "./Img/heart.png";
  }

  drawLiveUp = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
