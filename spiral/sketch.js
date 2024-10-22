var angle = 0.0;
var offset = 220;
var scalar = 2;
var speed = 0.01;

function setup() {
  createCanvas(440, 440);
  fill(0);
  background(204);
  frameRate(144);
}

function draw() {
  for (var i = 0; i < 100; ++i) {
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;
    ellipse(x, y, 2, 2);
    angle += speed;
    scalar += speed;
  }
}