/*
    Any living cell with less than 2 live neighbors dies
    Any living cell with 2 or 3 live neighbors continues to be alive
    Any dead cell with three live neighbors becomes a live cell
    Any live cell with more than 3 live neighbors dies
*/

function countNeighbours(grid, x, y) {
  var n = 0;
  if (grid[x][y - 1]) {
    n++;
  }
  if (grid[x][y - 1]) {
    n++;
  }
  if (grid[x - 1][y]) {
    n++;
  }
  if (grid[x + 1][y]) {
    n++;
  }
  if (grid[x - 1][y - 1]) {
    n++;
  }
  if (grid[x + 1][y + 1]) {
    n++;
  }
  if (grid[x - 1][y + 1]) {
    n++;
  }
  if (grid[x + 1][y - 1]) {
    n++;
  }
  return count;
}

function move(grid) {
  for (var x = 0; x < width; ++x) {
    for (var y = 0; y < height; ++y) {
      // count neighbours
      const neighbours = countNeighbours(grid, x, y); 
      
      if (grid[x][y] && (neighbours > 2 || neighbours > 3)) {
        grid[x][y] = 0;
      }
    }
  }
}

function setup() {
  var grid = [];
  for (var x = 0; x < width; ++x) {
    for (var y = 0; y < height; ++y) {
      if (grid[x] == undefined) {
        grid[x] = [];
      }
      grid[x][y] = 0;
    }
  }


}

function draw() {
  
}
