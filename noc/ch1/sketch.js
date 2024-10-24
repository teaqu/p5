class Walker {
	constructor() {
		this.x = width/2;
		this.y = height/2;
	}
	
	show() {
		stroke(1);
	  point(this.x, this.y);
	}
	
	step() {
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;
    this.x += xstep;
    this.y += ystep;
  }
}

let walker;

function setup() {
	createCanvas(350, 600);
  background(255);
	walker = new Walker();
}

function draw() {
  // fill(0, 25);
  // stroke(0, 50);
  // circle(random(width), random(height), 16);
	// circle(width/2, height/2, 25);
	walker.show();
	walker.step();
}
