// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
  const numOfChars = prompt('Enter the number of characters for the user IDs:')
  const numOfIds = prompt('Enter the number of user IDs to generate:')
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let userIds = []

  for (let i = 0; i < numOfIds; i++) {
    let userId = ''
    for (let j = 0; j < numOfChars; j++) {
      userId += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    userIds.push(userId)
  }

  return userIds
}

console.log(userIdGeneratedByUser()) // ['BPZxr', 'v2PTF', 'GNROt', 'gnhdj', 'UPqSY']

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

console.log(rgbColorGenerator())

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num = 3) {
  let hexArray = []
  for (let index = 0; index < num; index++) {
    let hex = Math.floor(Math.random() * 16777215).toString(16)
    if (hex.length != 6) {
      hex = hex.padStart(6, '0')
    }
    hexArray.push(`#${hex}`)
  }
  return hexArray
}

console.log(arrayOfHexaColors())

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(num = 3) {
  let rgbArray = []
  for (let index = 0; index < num; index++) {
    rgbArray.push(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
  }
  return rgbArray
}

console.log(arrayOfRgbColors())

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
  let regExp = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i
  if (!regExp.test(hex)) {
    return false
  }
  let str = hex.substr(1)

  if (str.length == 3) {
    let tempStr = ''
    for (let i = 0; i < 3; i++) {
      tempStr += str[i] + str[i]
    }
    str = tempStr
  }

  str = '0x' + str
  let r = str >> 16
  let g = (str >> 8) & 0xff
  let b = str & 0xff

  return `rgb(${r}, ${g}, ${b})`
}

console.log(convertHexaToRgb('#1E90FF')) // rgb(30, 144, 255)

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgb) {
  let regExp = /^rgb(\s*((1\d{2}|2(5[0-5]|[0-4]\d))|\d{1,2})\s*,\s*((1\d{2}|2(5[0-5]|[0-4]\d))|\d{1,2})\s*,\s*((1\d{2}|2(5[0-5]|[0-4]\d))|\d{1,2})\s*)$/i //判断rgb的格式是否正确

  let arr = rgb.split(',')
  let r = +arr[0].split('(')[1]
  let g = +arr[1]
  let b = +arr[2].split(')')[0]
  let value = (1 << 24) + (r << 16) + (g << 8) + b

  return '#' + value.toString(16).slice(1)
}

console.log(convertRgbToHexa('rgb(123,125,241)')) // #7b7df1

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, num) {
  if (type === 'hexa') {
    let hexArray = []
    for (let index = 0; index < num; index++) {
      let hex = Math.floor(Math.random() * 16777215).toString(16)
      if (hex.length != 6) {
        hex = hex.padStart(6, '0')
      }
      hexArray.push(`#${hex}`)
    }
    return hexArray
  } else if (type === 'rgb') {
    let rgbArray = []
    for (let index = 0; index < num; index++) {
      rgbArray.push(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
    }
    return rgbArray
  } else {
    return "It's not valid"
  }
}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
let shuffleArray = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6])) // [ 3, 4, 5, 2, 6, 1 ]

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
let factorial = num => {
  if (num === 0 || num === 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

console.log(factorial(5))

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
let sum = (...args) => {
  let sumNum = 0
  for (item of args) {
    sumNum += item
  }
  return sumNum
}

console.log(sum(1, 2, 3, 4, 5)) // 15

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
let sumOfArrayItems = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'Array contains non-numeric values.'
    }
    sum += arr[i]
  }
  return sum
}

console.log(sumOfArrayItems([1, 2, 3, 4, 5])) // 15
console.log(sumOfArrayItems(['1', '2', '3', '4', '5'])) // Array contains non-numeric values.
console.log(sumOfArrayItems(['a', 'b', 'c', 'd', 'e'])) // Array contains non-numeric values.

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
let average = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'Array contains non-numeric values.'
    }
    sum += arr[i]
  }
  return sum / arr.length
}

console.log(average([1, 2, 3, 4, 5])) // 3
console.log(average(['1', '2', '3', '4', '5'])) // Array contains non-numeric values.
console.log(average(['a', 'b', 'c', 'd', 'e'])) // Array contains non-numeric values.

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
let modifyArray = arr => {
  if (arr.length >= 5) {
    arr[4] = 'changed'
    return arr
  } else {
    return 'item not found'
  }
}

console.log(modifyArray(['a', 'b', 'c', 'd'])) // item not found
console.log(modifyArray(['a', 'b', 'c', 'd', 'e'])) // [ 'a', 'b', 'c', 'd', 'changed' ]

// 15. Write a function called isPrime, which checks if a number is prime number.
let isPrime = num => {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(5)) // true
console.log(isPrime(10)) // false
console.log(isPrime(13)) // true
console.log(isPrime(100)) // false

// 16. Write a functions which checks if all items are unique in the array.
const uniqueArray = arr => {
  const uniqueItems = new Set(arr)
  return uniqueItems.size === arr.length
}

console.log(uniqueArray([1, 1, 3, 4])) // false
console.log(uniqueArray([1, 2, 3, 4])) // true

// 17. Write a function which checks if all the items of the array are the same data type.
function checkSameDataType(arr) {
  const dataType = typeof arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== dataType) {
      return false
    }
  }
  return true
}

console.log(checkSameDataType([1, '1', 3, 4])) // false
console.log(checkSameDataType([1, 2, 3, 4])) // true

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(str) {
  return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(str)
}

console.log(isValidVariable('validVariable')) // true
console.log(isValidVariable('invalid variable')) // false
console.log(isValidVariable('$validVariable')) // true
console.log(isValidVariable('1invalidVariable')) // false
console.log(isValidVariable('')) // false

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function generateRandomNumbers() {
  const uniqueNumbers = new Set()
  while (uniqueNumbers.size < 7) {
    const randomNumber = Math.floor(Math.random() * 10)
    uniqueNumbers.add(randomNumber)
  }
  return Array.from(uniqueNumbers)
}

console.log(generateRandomNumbers())

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

const reverseCountries = countries => {
  return countries.reverse()
}

console.log(reverseCountries(countries))
