var superEggDrop = function(K, N) {
  let dp = Array(K+1).fill(0).map(() => new Array(N+1).fill(0))
  // console.log(dp)
  for (let j = 1; j <=N; j++) {
    for (let i = 1; i <= K; i++) {
      dp[i][j] = dp[i-1][j-1] + dp[i][j-1] + 1
      if (dp[i][j] >= N) {
        return j
      }
      
    }
  }
};
console.log(superEggDrop(K = 3, N = 14))