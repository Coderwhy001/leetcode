function helper (root, min, max) {
  if (root === null) return true
  if (root.val >= max || root.val <= min) return false
  return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}


var isValidBST = function(root) {
  return helper(root, -Infinity, Infinity)
};

console.log(isValidBST([5,1,4,null,null,3,6]))