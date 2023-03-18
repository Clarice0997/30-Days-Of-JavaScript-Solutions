// 1. Check the speed difference among the following loops: while, for, for of, forEach
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// while Loop
console.time('while')

let i = 0
while (i < arr.length) {
  console.log(arr[i])
  i++
}

console.timeEnd('while') // 4.146ms

// for Loop
console.time('for')

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

console.timeEnd('for') // 0.169ms

// for of Loop
console.time('for of')

for (let item of arr) {
  console.log(item)
}

console.timeEnd('for of') // 0.105ms

// forEach Loop
console.time('forEach')

arr.forEach(item => {
  console.log(item)
})

console.timeEnd('forEach') // 0.119ms
