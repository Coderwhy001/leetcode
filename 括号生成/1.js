var generateParenthesis = function (n) {
  let res = [];
  const result = (cur, left, right) => {
    if (cur.length === n * 2) {
      res.push(cur)
      return;
    }
    if (left < n) {
      result(cur + '(', left + 1, right)
    }
    if (right < left) {
      result(cur + ')', left, right + 1)
    }
  }
  result("", 0, 0)
  return res
};