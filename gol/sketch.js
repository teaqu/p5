/*
    Any living cell with less than 2 live neighbors dies
    Any dead cell with three live neighbors becomes a live cell
    Any living cell with 2 or 3 live neighbors continues to be alive
    Any live cell with more than 3 live neighbors dies
*/

const WIDTH = 200;
const HEIGHT = 80;
const CELL_SIZE = 10;
const TICK_FRAMES = 1;

let oldGrid = [];
let grid = [];
let pause = false;

function isValidPos(x, y) {
  return (x > 0 && y > 0 && x < WIDTH && y < HEIGHT);
}

function getCell(x, y) {
  return isValidPos(x, y) ? grid[x][y] : 0; 
}

function setCell(x, y, value) {
  if (isValidPos(x, y)) {
    grid[x][y] = value;
  }
}

function countNeighbours(x, y) {
  return getCell(x, y - 1) + getCell(x, y + 1)
		+ getCell(x - 1, y) + getCell(x + 1, y)
		+ getCell(x - 1, y - 1)	+ getCell(x + 1, y + 1)
		+ getCell(x - 1, y + 1) + getCell(x + 1, y - 1);
}

function drawCells(value) {
  for (var x = 0; x < WIDTH; ++x) {
    for (var y = 0; y < HEIGHT; ++y) {
      const x = floor(mouseX / CELL_SIZE);
      const y = floor(mouseY / CELL_SIZE);
      setCell(x, y, value);
    }
  }
}

function nextState() {
  let newGrid = blankGrid();
  for (var x = 0; x < WIDTH; ++x) {
    for (var y = 0; y < HEIGHT; ++y) {
      const neighbours = countNeighbours(x, y); 
      if (! grid[x][y] && neighbours == 3 || 
        grid[x][y] && (neighbours == 2 || neighbours == 3)) {
				newGrid[x][y] = 1;
      }
    }
  }
  oldGrid = grid;
  grid = newGrid;
}

function blankGrid() {
  newGrid = [];
	for (let x = 0; x < WIDTH; ++x) {
    for (let y = 0; y < HEIGHT; ++y) {
      if (newGrid [x] == undefined) {
        newGrid[x] = [];
      }
      newGrid[x][y] = 0;
    }
  }
  return newGrid;
}

function setup() {
	createCanvas(WIDTH*CELL_SIZE, HEIGHT*CELL_SIZE)
  stroke(200);

  grid = blankGrid();
  
	// Initial State
	const mx = floor(WIDTH/2);
	const my = floor(HEIGHT/2);

  // Col
	grid[mx][my] = 1;
	grid[mx - 1][my] = 1;
	grid[mx + 1][my] = 1;
  
  // Example
  grid[mx + 1][my - 1] = 1;
  grid[mx][my - 2] = 1;
}

function drawGrid() {
	for (let x = 0; x < WIDTH; ++x) {
    for (let y = 0; y < HEIGHT; ++y) {
			fill(255 - grid[x][y] * 255);
      if (oldGrid.length == 0 || grid[x][y] != oldGrid[x][y]) {
			  square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
		}
	}
}

function draw() {
  console.log(frameRate());
	drawGrid();

  if (mouseIsPressed) {
    drawCells(mouseButton == LEFT);
  } else if (frameCount % TICK_FRAMES == 0 && ! pause) {
    nextState();
  }
  
}

function keyPressed() {
  if (key == ' ') {
    pause = !pause;
  }
}
