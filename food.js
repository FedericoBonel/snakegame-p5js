
function Food(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  
  this.show = function() {
    fill("#fff");
    rect(this.x, this.y, size, size);
  }
  
}