var permute = function(nums) {
  let res = [];
  backtrack(nums, res);
  return res
};

function backtrack (nums, res, track = []) {
  if (track.length === nums.length) {
    res.push(track)
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (track.indexOf(nums[i]) >= 0) continue;
    track.push(nums[i])
    backtrack(nums, res, track.slice(0))
    track.pop()
  }
}
console.log(permute([1,2,3]))