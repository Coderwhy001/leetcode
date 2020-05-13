var levelOrder = function(root) {
  let res = []
  if (!root) return res
  dfs(root, 0, res)
  return res
};
function dfs (root, step, res) {
  if (root) {
    if (!res[step]) res[step] = []
    res[step].push(root.val)
    dfs(root.right, step+1, res)
    dfs(root.left, step+1, res)
  }
  return res
}
console.log(levelOrder([3,9,20,null,null,15,7]))