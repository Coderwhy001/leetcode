var generateParenthesis = function(n) {
  let res = []
  dfs(res, n, n, "")
  return res
};

function dfs(res, left, right, str) {
  if (left === 0 && right === 0) {
    res.push(str)
    return;
  }
  if (left > right) return;
  if (left > 0) {
    dfs(res, left-1, right, str + "(")
  }
  if (right > 0) {
    dfs(res, left, right-1, str + ")")
  }
}
