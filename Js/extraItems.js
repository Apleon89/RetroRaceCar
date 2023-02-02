class ExtraItem {
  constructor(posX, speed, objectNumber) {
    if (posX === 0) {
      this.x = 135;
    } else if (posX === 1) {
      this.x = 225;
    } else if (posX === 2) {
      this.x = 315;
    } else if (posX === 3) {
      this.x = 415;
    }
    this.y = -50;
    this.w = 50;
    this.h = 50;
    this.speed = speed;
    this.image = new Image();
    if (objectNumber === 1) {
      this.image.src = "./Img/wrench .png";
    } else if (objectNumber === 2) {
      this.image.src = "./Img/stainOil.png";
    }
  }

  drawExtraItem = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveExtraItem = () => {
    this.y += this.speed;
  };
}
