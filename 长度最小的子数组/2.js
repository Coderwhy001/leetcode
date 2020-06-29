var minSubArrayLen = function(s, nums) {
  let len = nums.length;
  if (len === 0) return 0;
  let ans = Infinity
  let start = 0
  let end = 0, sum = 0
  while(end < len) {
    sum += nums[end]
    while (sum >= s) {
      ans = Math.min(ans, end - start + 1)
      sum -= nums[start]
      start++;
    }
    end++;
  }
  return ans === Infinity ? 0 : ans
}
console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
