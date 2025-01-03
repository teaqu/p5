var i = 0

function setup() {
  createCanvas(440, 440);
  fill(0);
  background(204);
  frameRate(144);
}

function draw() {
    var x = sin(i);
    var y = sin(i + 3.14/2);
    point(220 + x * 40, 220 + y * 40, 4, 4);
    i++;
}