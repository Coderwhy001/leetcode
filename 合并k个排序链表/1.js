var mergeKLists = function(lists) {
  let len = lists.length;
  if(len == 0) return null;
  if(len == 1) return lists[0];
  let arr = [];
  for(let i = 0;i<len;i++){
    let temp = lists[i];
    while(temp){
        arr.push(temp.val);
        temp = temp.next;
    }
}
  arr.sort((a, b) => a - b);
  let res = new ListNode();
  let cur = res;
  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return res.next
};

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]))