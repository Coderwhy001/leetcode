var isSubtree = function(s, t) {
    return JSON.stringify(s).indexOf(JSON.stringify(t))>=0
}

console.log(isSubtree([3,4,5,1,2], [4,1,2]))



