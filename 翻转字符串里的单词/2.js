var reverseWords = function(s) {
  return s.split(" ").filter(item => item).reverse().join(' ')
};