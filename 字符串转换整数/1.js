var myAtoi = function(str) {
  let number = parseInt(str, 10)
  if (isNaN(number)) {
    return 0
  }
  if (number < Math.pow(-2, 31) || number > Math.pow(2, 31)-1 ) {
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31)-1
  }
  return number
};

// var fn = function (arrs) {
//   let nums =  arrs.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? fn(cur) : cur)
//   }, [])
//   return nums
// }

// console.log(fn([[1,2,[3,4,5,[6,7,8],9],10,[11,12]]]))