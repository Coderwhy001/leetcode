var isValidBST = function(root) {
  var queue = []
  function dfs(root){
      if (!root) return
      if (root.left) dfs(root.left)
      if (root) queue.push(root.val)
      if (root.right) dfs(root.right)
  }

  dfs(root)
  
  for (let i =0; i< queue.length-1; i++){
      if (queue[i] >= queue[i+1]) return false
  }
  
  return true
};
