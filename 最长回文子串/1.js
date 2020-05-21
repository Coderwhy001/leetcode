var longestPalindrome = function(s) {
  var arr = []
  for (let i = 0; i < s.length; i++) {
    let res = []
    for (let j = i; j < s.length; j++) {
      res.push(s[j])
      if (res.length > arr.length) {
        if (isPalindrome(res)) {
          arr = []
          arr.push(...res)
        }
      }
    }
  }
  return arr.join('')
};
function isPalindrome(list) {
  let left = 0
  let right = list.length-1;
  while(left < right) {
    if (list[left] === list[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true
}

// console.log(isPalindrome([ 'b', 'a', 'b', 'a', 'd' ]))