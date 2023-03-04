// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Clarice'
let lastName = 'Clarice'
let country = 'China'
let city = 'Fuzhou'
let age = 19
let isMarried = false
let year = 2023
let arr = [firstName, lastName, country, city, age, isMarried, year]
arr.forEach(element => {
  console.log(typeof element)
})

// 2. Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10)
console.log(typeof '10' === typeof 10)

// 3. Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt('9.8') == typeof 10)
console.log(typeof parseInt('9.8') === typeof 10)

// 4. Boolean value is either true or false.
// (1) Write three JavaScript statement which provide truthy value.
console.log(Boolean(1))
console.log(Boolean(true))
console.log(Boolean({}))

// (2) Write three JavaScript statement which provide falsy value.
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(NaN))

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // false
console.log(4 == '4') // true
console.log(4 === '4') // false

// Find the length of python and jargon and make a falsy comparison statement.
let python = 'python'
let jargon = 'jargon'
// number type != object type
console.log(python.length === new Number(jargon.length))

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!false) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
// There is no 'on' in both dragon and python
console.log(
  ['dragon', 'python'].every(item => {
    return item.search('on') === -1
  })
)

// 7. Use the Date object to do the following activities
// (1) What is the year today?
console.log(new Date().getFullYear())

// (2) What is the month today as a number?
console.log(new Date().getMonth() + 1)

// (3) What is the date today?
console.log(new Date().getDate())

// (4) What is the day today as a number?
console.log(new Date().getDay() + 1)

// (5) What is the hours now?
console.log(new Date().getHours())

// (6) What is the minutes now?
console.log(new Date().getMinutes())

// (7) Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(new Date().getTime())
