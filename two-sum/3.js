var twoSum = function(nums, target) {
  let i = nums.length
  while (i > 1) {
    let num = nums.pop()
    if (nums.indexOf(target - num) > -1) {
      return [nums.indexOf(target - num), i]
    }
    i--;
  }
}