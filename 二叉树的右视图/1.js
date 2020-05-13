var rightSideView = function(root) {
  if (!root) return []
  let arr = []
  dfs(root, 0, arr)
  return arr
}
function dfs(root, step, res) {
  if (root) {
    if (step === res.length) {
      res.push(root.val)
    }
    dfs(root.right, step+1, res)
    dfs(root.left, step+1, res)
  }
}
