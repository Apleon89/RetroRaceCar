class ShowImg {
    constructor() {
      this.x = -300;
      this.y = 150;
      this.w = 300;
      this.h = 300;
      this.image = new Image();
    }
  
    drawImg = () => {
      context.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  }