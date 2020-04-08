var minimumLengthEncoding = function (words) {
  let hashSet = new Set(words);
  for (let item of hashSet) {
      for (let i = 1; i < item.length; i++) {
          // 切片，看看是否词尾在 hashSet 中，切片从1开始，只看每个单词的词尾
          let target = item.slice(i);
          hashSet.has(target) && hashSet.delete(target);
      }
  }
  let result = 0;
  // 根据 hashSet 中剩余元素计算最终长度
  hashSet.forEach(item => result += item.length + 1)
  return result
};
console.log(minimumLengthEncoding(["time", "im"]))
