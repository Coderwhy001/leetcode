var findMedianSortedArrays = function(nums1, nums2) {
  nums1.push(...nums2)
  nums1.sort((a, b) => a - b)
  let mid;
  if (nums1.length % 2 !== 0) {
     mid = nums1[(nums1.length-1) / 2]
  } else {
     mid = (nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2
  }
  return mid
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))


12345678