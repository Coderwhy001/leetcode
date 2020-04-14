var addTwoNumbers = function(l1, l2) {
  let stack = [];
  let stack1 = [];
  let stack2 = [];
  let count = 0;
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }
  let a = null;
  let b = null;
  while (stack1.length > 0 || stack2.length > 0) {
    a = Number(stack1.pop()) || 0
    b = Number(stack2.pop()) || 0
    stack.push((a + b + count) % 10)
    if (a + b + count >= 10) {
      count = 1
    } else {
      count = 0
    }
  }
  if (count === 1) {
    stack.push(1)
  }
  let dummy = {}
  let current = dummy
  while (stack.length > 0) {
    current.next = {
      val: stack.pop(),
      next: null
    }
    current = current.next
  }
  return dummy.next
};
console.log(addTwoNumbers([7,2,4,3]
  [5,6,4]))