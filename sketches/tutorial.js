x = 0;
px = 100;
py = 100;

function setup() {
 // put setup code here
 createCanvas(280, 480);
 frameRate(60);
}

function draw() {
	x += 1;
	px += random(-1, 1);
	py += random(-1, 1);
  // put drawing code here
	background(204);
	fill("FFF");
	circle(100, 100, 10);
	point(px, py);
	line(210,10,100,50);
	fill("yellow")
	arc(190 + sin(x) *15, 60, 80, 80, QUARTER_PI, QUARTER_PI*7);
	fill("blue");
	circle(mouseX, mouseY, 100);
	text("Fumo", 20, 300);
}