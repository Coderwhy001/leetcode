var plusOne = function(digits) {
  let len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] != 0) {
      return digits
    }
  }
  let ary = new Array(len+1).fill(0)
  ary[0] = 1;
  return ary
};

console.log(plusOne([9]))