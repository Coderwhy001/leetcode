var mincostTickets = function(days, costs) {
  let len = days.length
  let dp = new Array(days[len-1]).fill(0)
  let k = 0
  for (let i = days[0]; i <= days[len-1]; i++) {
    if (i === days[k]) {
      dp[i] = Math.min(
        dp[(i-1)>=0?(i-1):0] + costs[0],
        dp[(i-7)>=0?(i-7):0] + costs[1],
        dp[(i-30)>=0?(i-30):0] + costs[2]
      )
      k++;
    } else {
      dp[i] = dp[i-1]
    }
  }
  return dp[dp.length-1]
};