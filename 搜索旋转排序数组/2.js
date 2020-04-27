var search = function(nums, target) {
  let low = 0;
  let high = nums.length-1;
  while(low <= high) {
    let mid = Math.floor((low + high) / 2)
    if(nums[low] === target){return low}
    if(nums[mid] === target) {return mid}
    if(nums[high] === target){return high}
    if (target < nums[low] && target > nums[mid]) {
      low = mid + 1;
    }
    else if (nums[low] <= nums[mid] && (target < nums[low] || target > nums[mid])) {
      low = mid + 1;
    } 
    else {
      high = mid - 1;
    }
  }
  return -1;
};