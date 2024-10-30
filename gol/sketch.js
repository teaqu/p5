/*
    Any living cell with less than 2 live neighbors dies
    Any living cell with 2 or 3 live neighbors continues to be alive
    Any dead cell with three live neighbors becomes a live cell
    Any live cell with more than 3 live neighbors dies
*/

const WIDTH = 50;
const HEIGHT = 50;
const CELL_SIZE = 10;

function countNeighbours(grid, x, y) {
	if (x < 0 || y < 0 || sizeof(grid) < x || sizeof(grid[x]) < y) {
		return 0;
	}
	
  return grid[x][y - 1]
		+ grid[x][y - 1]
		+ grid[x - 1][y]
		+ grid[x + 1][y]
		+ grid[x - 1][y - 1]
		+ grid[x + 1][y + 1]
		+ grid[x - 1][y + 1]
		+ grid[x + 1][y - 1];
}

function nextState(grid) {
  for (var x = 0; x < width; ++x) {
    for (var y = 0; y < height; ++y) {
      // count neighbours
      const neighbours = countNeighbours(grid, x, y); 
      
      if (grid[x][y] && (neighbours > 2 || neighbours > 3)) {
        grid[x][y] = 0;
      } else if (! grid[x][y] && countNeighbours(grid, x, y) >= 3) {
				grid[x][y] = 1;
      }
    }
  }
}

function initialiseGrid(width, height) {
	let grid = [];
	for (let x = 0; x < width; ++x) {
    for (let y = 0; y < height; ++y) {
      if (grid[x] == undefined) {
        grid[x] = [];
      }
      grid[x][y] = 0;
    }
  }
	return grid;
}

function setup() {
  let grid = initializeGrid(WIDTH, HEIGHT);
	
	drawCanvas(WIDTH*CELL_SIZE, HEIGHT*CELL_SIZE)
	
	// Initial State
	const mx = floor(width/2);
	const my = floor(height/2);
	grid[mx][my] = 1;
	grid[mx - 1][my] = 1;
	grid[mx + 1][my] = 1;
}

function drawGrid(grid) {
	for (let x = 0; x < width; ++x) {
    for (let y = 0; y < height; ++y) {
			fill(grid[x][y]);
			square(x, y, CELL_SIZE);
		}
	}
}

function draw() {
  nextState(grid);
	drawGrid(grid);
}
