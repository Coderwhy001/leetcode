var mergeTwoLists = function(l1, l2) {
  let arr = []
  if (l1 != null) return l2
  if (l2 != null) return l1
  while(l1) {
    arr.push(l1.val)
    l1 = l1.next
  }
  while(l2) {
    arr.push(l2.val)
    l2 = l2.next
  }
  arr.sort((a, b) => a - b)
  let head = new ListNode()
  let res = head
  for (let i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i])
    res.next = node
    res = res.next
  }
  return head.next
};

console.log(mergeTwoLists([1,2,4]
  [1,3,4]))