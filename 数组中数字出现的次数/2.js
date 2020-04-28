var singleNumbers = function (nums) {
  let m = 0, n=0;
  // 异或运算，得到两结果数字的抑或运算
  nums.forEach(num => {
      m ^= num;
  });
  let d = m & -m;
  nums.forEach(num => {
      num & d ? n ^= num : '';
  });
  let n1 = n ^ m;
  return [n, n1]
};