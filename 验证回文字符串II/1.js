var validPalindrome = function(s) {
  let left = 0;
  let num = 1
  let right = s.length - 1
  let arr = s.split('')
  while (left < right && num > 0) {
    if (arr[left] === arr[right]) {
      arr.pop()
      arr.shift()
      right = right - 2
    } else { 
      num--;
    }
  }
  let first = arr.slice(1)
  let end = arr.slice(0, -1)
  return isPalindrome(first) || isPalindrome(end)
};

console.log(validPalindrome("abc"))


function isPalindrome(list) {
  let length = list.length;
  let len = Math.floor(length/2)
  let left = []
  let right = []
  if (length % 2 === 1) {
    for (let i = 0; i < len; i++) {
      left.push(list[i])
    }
    for (let i = length-1; i > len; i--) {
      right.push(list[i])
    }
  } else {
    for (let i = 0; i < len; i++) {
      left.push(list[i])
    }
    for (let i = length-1; i >= len; i--) {
      right.push(list[i])
    }
  }
  let str1 = left.join('')
  let str2 = right.join('')
  if (str1 == str2) {
    return true
  } else {
    return false
  }
}