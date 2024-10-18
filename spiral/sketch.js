var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.1;

function setup() {
  createCanvas(120, 120);
  fill(0);
  background(204);
	frameRate(600);
}

function draw() {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse(x, y, 2, 2);
  angle += speed;
  scalar += speed;
}