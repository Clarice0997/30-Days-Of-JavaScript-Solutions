// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
  let x = 0
  let y = 0

  if (a == 0 && b == 0) {
    return 'Not a quadratic equation.'
  } else if (a == 0) {
    y = -c / b
  } else if (b == 0) {
    x = -c / a
  } else {
    x = -c / a
    y = (-a / b) * x
  }

  return { x, y }
}

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c) {
  let discriminant = b * b - 4 * a * c

  if (typeof a === 'undefined' || typeof b === 'undefined' || typeof c === 'undefined') {
    return 'Not a quadratic equation.'
  } else if (discriminant < 0) {
    return []
  } else if (discriminant == 0) {
    return [-b / (2 * a)]
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
  }
}

console.log(solveQuadratic()) // Not a quadratic equation.
console.log(solveQuadratic(1, 4, 4)) // [-2]
console.log(solveQuadratic(1, -1, -2)) // [2, -1]
console.log(solveQuadratic(1, 7, 12)) // [-3, -4]
console.log(solveQuadratic(1, 0, -4)) // [2, -2]
console.log(solveQuadratic(1, -1, 0)) // [1, 0]

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
  array.forEach(item => {
    console.log(item)
  })
}

printArray([1, 2, 3])

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  let date = new Date()
  let fmt = 'mm/dd/yyyy hh:MM'

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

console.log(showDateTime())

// 5. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  let temp = x
  x = y
  y = temp
  return { x, y }
}

console.log(swapValues(2, 4))

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
  let reverseArray = []
  for (let i = array.length - 1; i !== -1; i--) {
    reverseArray.push(array[i])
  }
  return reverseArray
}

console.log(reverseArray([1, 2, 3, 4, 5]))

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
  return array.map(item => {
    return item.toUpperCase()
  })
}

console.log(capitalizeArray(['a', 'b', 'c']))

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
  return [item]
}

console.log(addItem('abc'))

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
  let array = [1, 2, 3, 4, 5]
  array.splice(index, 1)
  return array
}

console.log(removeItem(3))

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
  let sum = 0
  for (let index = 0; index <= number; index++) {
    sum += index
  }
  return sum
}

console.log(sumOfNumbers(5))

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
  let sum = 0
  for (let index = 0; index <= number; index++) {
    if (index % 2 !== 0) sum += index
  }
  return sum
}

console.log(sumOfOdds(5))

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(number) {
  let sum = 0
  for (let index = 0; index <= number; index++) {
    if (index % 2 === 0) sum += index
  }
  return sum
}

console.log(sumOfEven(5))

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(int) {
  let odds = 0
  let evens = 0
  for (let index = 1; index <= int; index++) {
    if (index % 2 === 0) {
      evens++
    } else if (index % 2 !== 0) {
      odds++
    }
  }
  return {
    odds,
    evens
  }
}

console.log(evensAndOdds(50))

// 14. Write a function which takes any number of arguments and return the sum of the arguments
function sumArguments() {
  let sum = 0
  for (item in arguments) {
    sum += arguments[item]
  }
  return sum
}

console.log(sumArguments(1, 2, 3, 4, 5))

// 15. Writ a function which generates a randomUserIp.
function generateRandomUserIp() {
  const ip = []
  for (let i = 0; i < 4; i++) {
    ip.push(Math.floor(Math.random() * 256))
  }
  return ip.join('.')
}

console.log(generateRandomUserIp())

// 16. Write a function which generates a randomMacAddress
function generateRandomMacAddress() {
  const hexDigits = '0123456789ABCDEF'
  let mac = ''
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 2; j++) {
      mac += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length))
    }
    if (i !== 5) {
      mac += ':'
    }
  }
  return mac
}

console.log(generateRandomMacAddress())

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
  let hex = Math.floor(Math.random() * 16777215).toString(16)
  if (hex.length != 6) {
    hex = hex.padStart(6, '0')
  }
  return `#${hex}`
}

console.log(randomHexaNumberGenerator())

// 18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(num = 7) {
  const asciiChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let id = ''

  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * asciiChars.length)
    id += asciiChars[randomIndex]
  }

  return id
}

console.log(userIdGenerator())
