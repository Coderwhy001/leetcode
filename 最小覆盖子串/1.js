var minWindow = function(s, t) {
  let minLen = Infinity
  let resL
  let map = {}
  let missingType  = 0
  for (let char of t) {
    if (map[char] === undefined) {
      map[char] = 1
      missingType ++;
    } else {
      map[char] += 1
    }
  }
  let left = 0
  let right = 0
  for (; right < s.length; right++) {
    let target = s[right]
    if (map[target] !== undefined) map[target]--
    if (map[target] === 0) missingType--;
    while (missingType === 0) {
      if (right - left + 1 < minLen) {
        resL = left
        minLen = right - left + 1
      }
      let leftchar = s[left]
      if (map[leftchar] !== undefined) map[leftchar]++
      if (map[leftchar] > 0) missingType++;
      left++;
    }
  }
  return s.substring(resL, resL+minLen)
};

console.log(minWindow("ADOBECODEBANC", "ABC"))