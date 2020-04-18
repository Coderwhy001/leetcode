var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1
  let res = [];
  while (left != right) {
    let area = (right-left) * Math.min(height[right], height[left])
    res.push(area)
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return Math.max(...res)
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))