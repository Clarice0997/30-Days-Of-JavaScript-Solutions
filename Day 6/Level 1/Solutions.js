const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i)
}

let i = 0
while (i <= 10) {
  console.log(i)
  i++
}

i = 0
do {
  console.log(i)
  i++
} while (i <= 10)

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i)
}

i = 10
while (i >= 0) {
  console.log(i)
  i--
}

i = 10
do {
  console.log(i)
  i--
} while (i >= 0)

// 3. Iterate 0 to n using for loop
let n = 20
for (let i = 0; i <= n; i++) {
  console.log(i)
}

// 4. Write a loop that makes the following pattern using console.log():
let str = ''
for (let i = 0; i <= 6; i++) {
  str += '#'
  console.log(str)
}

// 5. Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}

// 6. Using loop print the following pattern
console.log('t\ti^2\ti^3')
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`)
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= 100; i++) {
  let isPrime = true

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false
      break
    }
  }

  if (i > 1 && isPrime) {
    console.log(i)
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for (let i = 0; i <= 100; i++) {
  sum += i
}
console.log(sum)

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0
let oddSum = 0
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i
  } else {
    oddSum += i
  }
}
console.log(evenSum)
console.log(oddSum)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let array = [evenSum, oddSum]
console.log(array)

// 13. Develop a small script which generate array of 5 random numbers.
array = []
for (let i = 0; i <= 5; i++) {
  array.push(Math.random())
}
console.log(array)

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
arr = []
while (arr.length < 5) {
  const num = Math.floor(Math.random() * 10) + 1
  if (!arr.includes(num)) {
    arr.push(num)
  }
}
console.log(arr)

// 15. Develop a small script which generate a six characters random id:
const asciiChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let id = ''

for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * asciiChars.length)
  id += asciiChars[randomIndex]
}

console.log(id)
