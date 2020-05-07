var isSubtree = function(s, t) {
  if (!s || !t) return false
  if (isSomeTree(s,t)) return true
  return isSubtree(s.left, t) || isSubtree(s.right, t)
};


function isSomeTree (a, b) {
  if (a && !b) return false
  if (!a && b) return false
  if (!a && !b) return true
  if (a.val === b.val) {
    return isSomeTree(a.left, b.left) && isSomeTree(a.right, b.right)
  } else {
    return false
  }
}