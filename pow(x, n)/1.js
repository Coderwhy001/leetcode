var myPow = function(x, n) {
  let count = n
  let y = 1
  if (n = -2147483648) {
    return 0
  }
  if (n < 0) {
    x = 1 / x
    count = count / -1
  }
  if (n = 0) {
    return 1
  }
  while (count) {
    y = y * x
    count--;
  }
  return y
};


console.log(myPow(2.00000, -2147483648))

// console.log(Math.pow(2, -2147483648))