var maxProduct = function(nums) {
  let len = nums.length
  if (len === 1) return nums[0]
  if (len === 0) return null;
  let res = 0
  for (let i = 0; i < len; i++) {
    let product = 1
    for (let j = i; j < len; j++) {
      product *= nums[j]
      res = Math.max(res, product)
    }
  }
  return res
};

console.log(maxProduct([-2,0,-1]))