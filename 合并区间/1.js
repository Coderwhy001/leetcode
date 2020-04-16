var merge = function(intervals) {
  let result = [];
  let len = intervals.length;
  let i = 0;
  if (len === 0) {
    return []
  }
  intervals.sort((a, b) => a[0] - b[0])
  while (i < len) {
    let curleft = intervals[i][0]
    let curright = intervals[i][1]
    while (i < len - 1 && intervals[i+1][0] <= curright) {
      curright = Math.max(curright, intervals[i+1][1])
      i++
    }
    result.push([curleft, curright])
    i++;
  }
  return result
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))