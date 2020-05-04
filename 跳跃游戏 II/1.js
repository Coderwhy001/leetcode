var jump = function(nums) {
  let maxposition = 0;
  let end = 0;
  let step = 0
  for (let i = 0; i < nums.length - 1; i++) {
    maxposition = Math.max(maxposition, i + nums[i])
    if (i === end) {
      end = maxposition;
      step++;
    }
  }
  return step
};

console.log(jump([2,3,1,1,4]))