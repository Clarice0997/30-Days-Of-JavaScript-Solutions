// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let age = Number(prompt('Enter your age:'))
// alert(age >= 18 ? 'You are old enough to drive.' : `You are left with ${18 - age} years to drive.`)

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let yourAge = 25
// let age = Number(prompt('Enter your age:'))
// if (yourAge > age) {
//   alert(`You are ${yourAge - age} years older than me.`)
// } else if (yourAge === age) {
//   alert(`You are the same age as me.`)
// } else {
//   alert(`You are ${age - yourAge} years younger than me.`)
// }

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3

// using if else
if (a > b) {
  console.log('a is greater than b')
} else if (a < b) {
  console.log('a is less than b')
} else {
  console.log('a is as same as b')
}

// ternary operator
console.log(a > b ? 'a is greater than b' : 'a is less than b')

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = Number(prompt('Enter a number:'))
alert(number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`)
