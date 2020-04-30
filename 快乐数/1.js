var isHappy = function(n) {
  let next = function (n) {
    n += ''
    let res = 0
    for (let i = 0; i < n.length; i++) {
      res += Math.pow(n[i], 2)
    }
    return res
  }
  let set = new Set()
  while (n != 1) {
    if (set.has(n)) return false
    set.add(n)
     n = next(n)
  }
  return true
};
console.log(isHappy(19))