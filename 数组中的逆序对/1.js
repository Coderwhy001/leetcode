var reversePairs = function(nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      nums[i] > nums[j] && res++;
    }
  }
  return res;
};

console.log(reversePairs([7,5,6,4]))