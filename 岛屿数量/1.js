var numIslands = function(grid) {
  let rows = grid.length
  if (!rows) return 0
  let cols = grid[0].length
  let res = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j)
        res++;
      }
    }
  }
  return res
};

var dfs = function(grid, r, c) {
  let rows = grid.length;
  let cols = grid[0].length
  grid[r][c] = '0'
  if (r - 1 >= 0 && grid[r-1][c] === '1') dfs(grid, r-1, c)
  if (r + 1 <= rows - 1 && grid[r+1][c] === '1') dfs(grid, r+1, c)
  if (c - 1 >= 0 && grid[r][c-1] === '1') dfs(grid, r, c-1)
  if (c + 1 <= cols - 1 && grid[r][c+1] === '1') dfs(grid, r, c+1)
}