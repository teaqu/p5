var i = 0;

function setup() {
  createCanvas(440, 440);
  fill(0);
  background(204);
  frameRate(144);
}

function draw() {
  z = sin(i / 20) * 400;
  var x = sin(i + i * 10);
  var y = sin(z / 260 + 3.14 / 2) * 40;
  point(220 + x * y, 220 + (z / 500) * 40, 4, 4);
  i++;
}
