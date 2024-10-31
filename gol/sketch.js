/*
    Any living cell with less than 2 live neighbors dies
    Any living cell with 2 or 3 live neighbors continues to be alive
    Any dead cell with three live neighbors becomes a live cell
    Any live cell with more than 3 live neighbors dies
*/

const WIDTH = 50;
const HEIGHT = 50;
const CELL_SIZE = 10;

let grid = [];

function getCell(x, y) {
	if (x < 0 || y < 0 || grid.length <= x || grid.length <= y) {
		return 0;
	}
  return grid[x][y];
}

function countNeighbours(x, y) {
  return getCell(x, y - 1) + getCell(x, y + 1)
		+ getCell(x - 1, y) + getCell(x + 1, y)
		+ getCell(x - 1, y - 1)	+ getCell(x + 1, y + 1)
		+ getCell(x - 1, y + 1) + getCell(x + 1, y - 1);
}

function nextState() {
  let newGrid = blankGrid();
  for (var x = 0; x < WIDTH; ++x) {
    for (var y = 0; y < HEIGHT; ++y) {
      const neighbours = countNeighbours(x, y); 
      if (grid[x][y] && (neighbours < 2 || neighbours > 3)) {
        newGrid[x][y] = 0;
      } if (! grid[x][y] && neighbours >= 3) {
				newGrid[x][y] = 1;
      }
      if (mouseIsPressed) {
        newGrid[floor(mouseX / CELL_SIZE)][floor(mouseY / CELL_SIZE)] = 1;
      }
    }
  }
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
  background(255);
  grid = blankGrid();
	
	// Initial State
	const mx = floor(WIDTH/2);
	const my = floor(HEIGHT/2);
	grid[mx][my] = 1;
	grid[mx - 1][my] = 1;
	grid[mx + 1][my] = 1;
	grid[mx + 1][my + 1] = 1;
}

function drawGrid() {
	for (let x = 0; x < WIDTH; ++x) {
    for (let y = 0; y < HEIGHT; ++y) {
			fill(grid[x][y] * 255);
			square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
		}
	}
}

function draw() {
  nextState();
	drawGrid();
}
