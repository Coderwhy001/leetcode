var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1
  let res = [];
  let start = 0
  let len = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (res.indexOf(s[j]) === -1) {
        res.push(s[j])
      } else {
        len = Math.max(len, res.length)
        res.splice(0)
        break;
      }
    }
  }
  return len
};

console.log(lengthOfLongestSubstring("c"))
