var mySqrt = function(x) {
  if (x === 0) return 0
  if (x === 1) return 1
  let left = 1;
  let right = x;
  while (right >= left) {
    let middle = left + ((right - left)>>1)
    if (middle * middle === x) return middle
    if (middle * middle > x) {
      right = middle - 1;
    } else {
      left = middle + 1
    }
  }
  return right
};