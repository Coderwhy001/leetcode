var threeSum = function(nums) {
  if (nums.length < 3) return [];
  let target = []
  let res = []
  let count = 3;
  backtrack(nums.sort((a, b) => a - b), target, count, res)
  return target
};
function backtrack(nums, target, count, res, start = 0) {
  if (res.length === 3) {
    if (res.reduce((cur, pre) => cur + pre, 0) === 0) {
      if (target.every(value => value.toString() !== res.toString())) {
        target.push([...res])
      }
    }
    return;
  }
  for (let i = start; i < nums.length; i++) {
    res.push(nums[i])
    backtrack(nums, target, count, res, i+1)
    res.pop()
  }
}
console.log(threeSum([3,0,-2,-1,1,2]))

// console.log([ -2, 0, 2 ].sort().toString() !== [ 0, -1, 1 ].sort().toString())