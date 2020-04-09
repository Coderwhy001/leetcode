var movingCount = function(m, n, k) {
  function getsum(num) {
    let number = num.toString().split('')
    return number.reduce((a, b) => Number(a) + Number(b))
  }
//   function getsum(num) {
//     let answer = 0;

//     while(num) {
//         answer += num % 10;
//         num = Math.floor(num / 10);
//     }

//     return answer;
// } 
  let directionAry = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ]
  let set = new Set(['0, 0'])
  let array = [[0, 0]]
  while(array.length) {
    let [x, y] = array.shift()
    for (let i = 0; i < 4; i++) {
      let dirx = x + directionAry[i][0]
      let diry = y + directionAry[i][1]
      if (dirx < 0 || diry < 0 || dirx >= m || diry >= n || getsum(dirx) + getsum(diry) > k || set.has(`${dirx}, ${diry}`)) {
        continue
      }
      set.add(`${dirx}, ${diry}`)
      array.push([dirx, diry])
    }
  }
  return set.size
};
console.log(movingCount(m = 2, n = 3, k = 1))