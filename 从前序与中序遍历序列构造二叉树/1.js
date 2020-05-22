var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null
  let root = new TreeNode(preorder[0])
  let index = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
  root.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))
  return root
};




console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))