class Walker {
	constructor() {
		this.x = random(width);
		this.y = random(height);
    this.color = [floor(random(255)), floor(random(255)), floor(random(255))];
	}
	
	show() {
		stroke(this.color[0], this.color[1], this.color[2]);
    strokeWeight(5);
	  point(this.x, this.y);
	}
	
	step() {
    let xstep = random(-3, 3);
    let ystep = random(-3, 3);

    const col = get(this.x + xstep, this.y + ystep);
    if ((col[0] == 255 && col[1] == 255 && col[2] == 255) || 
      (col[0] == this.color[0] && col[1] == this.color[1] && col[2] == this.color[2])) {
      this.x += xstep;
      this.y += ystep;
      this.x = min(this.x, width);
      this.x = max(this.x, 0);
      this.y = min(this.y, height);
      this.y = max(this.y, 0);
    }
  }
}

const WALKER_COUNT = 100;

let walkers;

function setup() {
	createCanvas(350, 600);
  background(255);
  walkers = [];
  for (let i = 0; i < WALKER_COUNT; ++i) {
  	walkers[i] = new Walker();
  }
}

function draw() {
  // fill(0, 25);
  // stroke(0, 50);
  // circle(random(width), random(height), 16);
	// circle(width/2, height/2, 25);
  for (let i = 0; i < WALKER_COUNT; ++i) {
	  walkers[i].show();
	  walkers[i].step();
  }
}
