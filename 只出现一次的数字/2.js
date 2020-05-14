var singleNumber = function(nums) {
  let map = new Map;
  for (let num of nums) {
      map.set(num, (map.has(num) ? map.get(num) + 1 : 1))
  }
  for ([k, v] of map) {
      if (v === 2) {
          map.delete(k)
      }
  }
  return map.keys()
};

console.log(singleNumber([2,2,1]))