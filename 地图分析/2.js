var maxDistance = function(grid) {
  if (!grid.length === 0 || !grid[0].length === 0) return -1;
  
  let ans = -1,
      land = [],
      rowLimit = grid.length,
      colLimit = grid[0].length;
  
  // 找到所有陆地放到队列中
  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      if (grid[i][j] == 1) land.push( [i, j] );
    }
  }
  
  // 全是海洋或者全是陆地
  if (land.length === rowLimit * colLimit) return -1;
  
  // 对每一块陆地进行 BFS，已访问过的格子标记成陆地做一个去重
  while (land.length > 0) {
    let size = land.length;
    while (size > 0) {
      size--;
      let curr = land.shift();
      
      // 向矩阵的四个方向搜索
      // 终止条件：越界或者找到一块陆地
      let ways = [ [-1, 0], [0, 1], [1, 0], [0, -1] ];
      for (let i = 0; i < 4; i++) {
        let r = curr[0] + ways[i][0],
            c = curr[1] + ways[i][1];
        
        // 越界 -> 跳过此方向
        if (
          r < 0 || r >= rowLimit || c < 0 || c >= colLimit ||
          grid[r][c] === 1
        ) continue;
        
        // 如果找到的是海洋，继续加入到队列中，距离 + 1
        if (grid[r][c] === 0) {
          land.push( [r, c] );
          grid[r][c] = 1;
        }
      }
    }
    ans++;
  }
  
  return ans;
};
