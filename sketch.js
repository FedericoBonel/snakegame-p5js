let snakeObject;
let food;
const speed = 1;
const snakeSize = 10;

function setup() {
  createCanvas(500, 500);
  snakeObject = new Snake(getColl(), getRow(), snakeSize, speed);
  food = new Food(getColl(), getRow(), snakeSize);
  frameRate(10);
}

function draw() {
  background("#000");
  if (snakeObject.isDead()) {
    endGame();
  }
  snakeObject.update();
  snakeObject.show();
  if (snakeObject.eat(food)) {
    food = new Food(getColl(), getRow(), snakeSize);
  }
  food.show();
}

function getColl() {
  return floor(random(floor(width / snakeSize))) * snakeSize;
}

function getRow() {
  return floor(random(floor(width / snakeSize))) * snakeSize;
}

function keyPressed() {
  if (keyCode === UP_ARROW && snakeObject.yspeed !== speed) {
    snakeObject.dir(0, -speed);
  } else if (keyCode === DOWN_ARROW && snakeObject.yspeed !== -speed) {
    snakeObject.dir(0, speed);
  } else if (keyCode === LEFT_ARROW && snakeObject.xspeed !== speed) {
    snakeObject.dir(-speed, 0);
  } else if (keyCode === RIGHT_ARROW && snakeObject.xspeed !== -speed) {
    snakeObject.dir(speed, 0);
  } else if (keyCode === ENTER) {
    setup();
    loop();
  }
}

function endGame() {
  background("#FF0000");
  textAlign(CENTER);
  textSize(40);
  text("🐍 You have lost! 🐍", width / 2, height / 2 - 50);
  text("Total points: " + snakeObject.tailSize, width / 2, height / 2);
  text("Press enter to restart", width / 2, height / 2 + 50);
  noLoop();
  console.log("Dead");
}
