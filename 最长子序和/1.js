var maxSubArray = function(nums) {
  let res = nums[0]
  let sum = 0;
  for (let num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    res = Math.max(sum, res)
  }
  return res
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))