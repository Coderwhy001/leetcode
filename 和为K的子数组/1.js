var subarraySum = function(nums, k) {
  if (!nums) return 0
  let count = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    let res = 0
    for (let j = i; j < len; j++) {
      res += nums[j]
      if (res === k) {
        count++;
      }
    }
  }
  return count
};

console.log(subarraySum([28,54,7,-70,22,65,-6], 100))