class Car {
  constructor() {
    this.x = 313; //salida: 310
    this.y = 480;
    this.w = 60;
    this.h = 110;
    this.speed = 1.5;
    this.move = 93;
    this.image = new Image();
    this.image.src = "./Img/Car_Orange.png";
    this.pressedUp = false;
    this.pressedBottom = false;
  }

  drawCar = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  moveLeftCar = () => {
    this.x -= this.move;
  };
  moveRightCar = () => {
    this.x += this.move;
  };
  moveUpCar = () => {
    if (this.pressedUp === true && this.y > 0) {
      this.y -= this.speed;
    }
  };
  brakeCar = () => {
    if (this.pressedBottom === true && this.y + this.h <= 590) {
      this.y += this.speed - 0.3;
    } else if (this.y + this.h <= 590) {
      this.y += 0.5;
    }
  };
}
