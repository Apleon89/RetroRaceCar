

RETRO RACE CAR


## [Prueba el juego](https://apleon89.github.io/RetroRaceCar/)

# Descripción

Retro Race Car es un juego que consiste en conducir un coche horizontal y verticalmente por una autopista evitanto colisionar con el resto de coches que aparecen por la parte superior durante el máximo tiempo posible. El juego termina cuando pierdes todas las vidas o cuando se coge la mancha de aceite en el suelo.

# Funcionalidades del juego

- El juego tiene un coche que hay que mover horizontal y verticalmente.
- El coche se mueve horizontalmente entre los cuatro carriles disponibles y verticalmente acelerando rápidamente o frenando lentamente.
- El resto de coches aparecen de forma aleatoria por los cuatro carriles superiores y van bajando.
- El juego empieza con dos vidas y se pueden llegar a conseguir un máximo de 4, cogiendo las llaves inglesas que aparecen de forma aleatoria por uno de los cuatro carriles, si se llega a cero vidas el juego termina.
- También aparece una mancha de aceite de forma aleatoria que si se llega a tocar se acaba el juego de forma inmediata.
- El Score sube en base al tiempo que logremos aguantar sin perder todas las vidas o colisionar con la mancha de aceite.
- Cada 50 puntos sube la dificultad del juego haciendo cada vez más dificil evitar colisionar con el resto de los coches.
- El juego guarda la puntuación máxima obtenida así como el estado del sonido para que la próxima vez que se juegue se mantenga esa información.

# Funcionalidades futuras

- Pasado cierto tiempo se hará de noche y los coches encenderán las luces.


# Estructura del Proyecto

## main.js

- pause()
- mute()
- startGame()

## game.js

- Game () {
    this.isGameOn;
    this.bgArr;
    this.oilArr;
    this.wrenchArr;
    this.carDriver;
    this.carArr;
    this.crashImg;;
    this.liveUp;;
    this.levelUp;
    this.lives;
    this.frames;
    this.framesCarAppear;
}
- clearCanvas () {}
- highwayMovement () {}
- enemyCarsAppear () {}
- oldCarsDisappear () {}
- colissionCheck () {}
- wrenchAppear () {}
- wrenchColissionCheck () {}
- oldWrenchDisappear () {}
- stainOilAppear () {}
- oilColissionCheck () {}
- oldStainOilDisappear () {}
- levelUpImgAppear () {}
- gameOver () {}
- scoreCounter () {}
- gameLoop () {}

## bg.js 

- constructor () {
    this.y;
    this.speed;
    this.bg;
}
- drawBg () {}
- moveBg () {}

## car1.js 

- constructor () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
    this.move;
    this.image;
    this.pressedUp;
    this.pressedBottom;
}
- drawCar () {}
- moveLeftCar () {}
- moveRightCar () {}
- moveUpCar () {}
- brakeCar () {}

## enemyCars.js 

- constructor () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
    this.image;
}
- drawEnemyCar () {}
- moveEnemyCar () {}

## extraItems.js 

- constructor () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
    this.image;
}
- drawExtraItem () {}
- moveExtraItem () {}

## showImg.js 

- constructor () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.image;
}
- drawImg () {}

# Pantallas del juego

- Pantalla de incio.
- Pantalla del juego.
- pantalla de game-over.



# Links extra


Git Hub
[Link](https://github.com/Apleon89/RetroRaceCar)
