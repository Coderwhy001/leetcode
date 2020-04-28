var singleNumbers = function(nums) {
  if (nums.length < 2) return nums
  let numsMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], (numsMap.has(nums[i]) ? numsMap.get(nums[i]) + 1 : 1))
  }
  for ([k, v] of numsMap) {
    if (v === 2) {
      numsMap.delete(k)
    }
  }
  return [...numsMap.keys()]
};

console.log(singleNumbers([1,2,10,4,1,4,3,3]))