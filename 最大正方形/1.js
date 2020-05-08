var maximalSquare = function(matrix) {
  let maxside = 0
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0
  let row = matrix.length
  let col = matrix[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') {
        let flag = true;
        maxside = Math.max(maxside, 1)
        currentside = Math.min(row-i, col-j)
        for (let m = 1; m <= currentside-1; m++) {
          if (matrix[i+m][j+m] === '0') break;
          for (let n = 0; n < m; n++) {
            if (matrix[i+m][j+n] === '0' || matrix[i+n][j+m] === '0') {
              flag = false;
              break;
            }
          }
          if (flag) {
            maxside = Math.max(maxside, m+1)
          } else {
            break;
          }
        }
      }
    }
  }
  return maxside * maxside
};