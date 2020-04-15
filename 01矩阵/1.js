var updateMatrix = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let dp = new Array(m).fill(Infinity).map(() => new Array(n).fill(Infinity))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        dp[i][j] = 0
      } else {
        if (i - 1 >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i-1][j] + 1)
        }
        if (j - 1 >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j-1] + 1)
        }
      }
    }
  }
  for (let i = m-1; i >= 0; i--) {
    for (let j = n-1; j >= 0; j--) {
        if (i + 1 <= m-1) {
          dp[i][j] = Math.min(dp[i][j], dp[i+1][j] + 1)
        }
        if (j + 1 <= n-1) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j+1] + 1)
        }
    }
  }
  return dp
};