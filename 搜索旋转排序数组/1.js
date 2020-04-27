var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    while(low < high) {
      let mid = Math.floor((low + high) / 2)
      if (target < nums[0] && target > nums[mid]) {
        low = mid + 1;
      }
      else if (nums[0] <= nums[mid] && (target < nums[0] || target > nums[mid])) {
        low = mid + 1;
      } 
      else {
        high = mid;
      }
    }
    return low == high && nums[low] == target ? low : -1;
};

console.log(search([3,1], 1))