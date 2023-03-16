const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
// 1. Find a union b
let union = new Set([...a, ...b])
console.log(union)

// 2. Find a intersection b
// 3. Find a with b
let B = new Set(b)
let intersection = a.filter(item => B.has(item))
console.log(new Set(intersection))
