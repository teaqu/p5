function setup() {
	createCanvas(350, 600);
  background(255);
}
function draw() {
  fill(0, 25);
  stroke(0, 50);
  circle(random(width), random(height), 16);
	circle(width/2, height/2, 25);
}