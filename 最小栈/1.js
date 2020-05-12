var MinStack = function() {
   this.ary = []
  return null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let len = this.ary.length
  this.ary[len] = x
  len = len + 1
  return null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let len = this.ary.length
  len--;
  delete this.ary[len]
  this.ary.length = len
  return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let res = this.ary[this.ary.length-1]
  return res
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let len = this.ary.length
  let res = Infinity
  for (let i = 0; i < len; i++) {
    res = Math.min(res, this.ary[i])
  }
  return res
};