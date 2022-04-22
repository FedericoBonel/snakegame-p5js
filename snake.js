// Snake object of the game
function Snake(initx, inity, sizeSnake, speed) {
  this.sizeSnake = sizeSnake;
  this.x = initx;
  this.y = inity;
  this.xspeed = 0;
  this.yspeed = speed;
  this.tailSize = 0;
  this.tail = [];
  
  // Updates the data of the snake
  this.update = function() {
    // Shift the blocks in the in the tail
    for(let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    // insert the new position in the tail array
    if (this.tailSize > 0) {
      this.tail[this.tailSize - 1] = createVector(this.x, this.y);
    }
    
    // Move the snake's head
    this.x += this.xspeed * sizeSnake;
    this.y += this.yspeed * sizeSnake;
    
    // Limit the movement of the snake to the window
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
  
  // Displays the snake in the
  this.show = function() {
    fill("#fff");
    for (let i = 0; i < this.tailSize; i ++) {
      rect(this.tail[i].x, this.tail[i].y, sizeSnake, sizeSnake);
    }
    rect(this.x, this.y, sizeSnake, sizeSnake);
  }
  
  // Changes the direction of the snake
  this.dir = function(xDir, yDir) {
    this.yspeed = yDir;
    this.xspeed = xDir;
  }
  
  // Checks if the food can be eaten by the snake and if so increments its size
  this.eat = function(food) {
    let distance = dist(this.x, this.y, food.x, food.y);
    if (distance < sizeSnake) {
      this.tailSize++;
      return true;
    }
    return false;
  }
  
  // Checks if the snake is dead
  this.isDead = function() {
    // Check if the snake is at the border
    if (this.x === width || this.y === height) {
      return true;
    }
    // Iterate through the tail and check if any tail block has clashed with the head
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < sizeSnake) {
        return true;
      }
    }
    return false;
  }
}