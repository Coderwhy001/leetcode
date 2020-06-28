var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) return 0;
  let len = Infinity
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= s) {
        len = Math.min(len, j-i+1)
        break;
      }
    }
  }
  return len === Infinity ? 0 : len
}
console.log(minSubArrayLen(15, [1,2,3,4,5]))
