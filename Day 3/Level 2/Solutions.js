// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = window.prompt('Enter base:')
// let height = window.prompt('Enter height:')
// alert(`The area of the triangle is ${0.5 * base * height}`)

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// tip: prompt output dataType is String
// let a = Number(window.prompt('Enter side a:'))
// let b = Number(window.prompt('Enter side b:'))
// let c = Number(window.prompt('Enter side c:'))
// alert(`The perimeter of the triangle is ${a + b + c}`)

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = Number(window.prompt('Enter length:'))
// let width = Number(window.prompt('Enter width:'))
// alert(`area of rectangle: ${length * width}`)
// alert(`perimeter of rectangle: ${2 * (length * width)}`)

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = Number(window.prompt('Enter circle radius:'))
// alert(`the area of a circle: ${Math.PI * radius ** 2}`)
// alert(`circumference of a circle: ${2 * Math.PI * radius}`)

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slope = 2

let x_intercept = (1 / 2) * 0 - 1
console.log(x_intercept) // -1

let y_intercept = 2 * 0 - 2
console.log(y_intercept) // -2

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
console.log(`${(y2 - y1) / (x2 - x1)}`) // 2

// 7. Compare the slope of above two questions.
console.log(Boolean(2 === 2))

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = -3
let y = (x + 3) ** 2
console.log(y)

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hours = Number(prompt('Enter hours:'))
// let rate = Number(prompt('Enter rate per hour:'))
// alert(`Your weekly earning is ${hours * rate}`)

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// if (prompt('Enter your name').length > 7) {
//   alert('your name is long.')
// } else {
//   alert('your name is short.')
// }

// 11. Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
} else if (firstName.length === lastName.length) {
  console.log(`Your first name, ${firstName} has the same length as your family name, ${lastName}`)
} else {
  console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you.`)

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let year = Number(prompt('Enter birth year:'))
// let age = new Date().getFullYear() - year
// console.log(`You are ${age}. ${age >= 18 ? 'You are old enough to drive' : `You will be allowed to drive after ${18 - age} years.`}`)

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let year = Number(prompt('Enter number of years you live:'))
// const secondsInYear = 365 * 24 * 60 * 60
// alert(`You lived ${year * secondsInYear} seconds.`)

// 15. Create a human readable time format using the Date time object
function formatTime(date, fmt) {
  if (typeof date == 'string') {
    return date
  }

  if (!fmt) fmt = 'yyyy-MM-dd hh:mm:ss'

  if (!date || date == null) return null
  var o = {
    'M+': date.getMonth() + 1, // Month
    'd+': date.getDate(), // Date
    'h+': date.getHours(), // Hour
    'm+': date.getMinutes(), // Minute
    's+': date.getSeconds(), // Second
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // Milliseconds
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
  }
  return fmt
}

console.log(formatTime(new Date(), 'yyyy-MM-dd hh:mm'))
console.log(formatTime(new Date(), 'dd-MM-yyyy hh:mm'))
console.log(formatTime(new Date(), 'dd/MM/yyyy hh:mm'))
