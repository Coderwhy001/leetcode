var waysToChange = function(n) {
  let mod = 1000000007
  let coins = [1, 5, 10, 25]
  let dp = new Array(n+1)
  dp[0] = 1
  for (let coin of coins) {
    for (let i = coin; i <= n; i++) {
        dp[i] = (dp[i] + dp[i - coin]) % mod
    }
  }
  return dp[n]
};