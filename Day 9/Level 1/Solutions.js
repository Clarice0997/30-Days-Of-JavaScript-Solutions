const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

// 1. Explain the difference between forEach, map, filter, and reduce.
// forEach method takes in an array and execute a function for each element in the array
// map method produces a new array from the provided callback function to be executed on each array
// filter method creates a new array that passes the test of the callback function provided
// reduce methods produces a single value from an array provided it meets the callback function

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
function callback(item) {
  console.log(item)
}

countries.forEach(callback)

// 3. Use forEach to console.log each country in the countries array.
countries.forEach(item => {
  console.log(item)
})

// 4. Use forEach to console.log each name in the names array.
names.forEach(item => {
  console.log(item)
})

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach(item => {
  console.log(item)
})

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map(item => {
  return item.toUpperCase()
})

console.log(uppercaseCountries)

// 7. Use map to create an array of countries length from countries array.
const lengthCountries = countries.map(item => {
  return item.length
})

console.log(lengthCountries)

// 8. Use map to create a new array by changing each number to square in the numbers array
const squareNum = numbers.map(num => {
  return num * num
})
console.log(squareNum)

// 9. Use map to change to each name to uppercase in the names array
const uppCaseNames = names.map(name => {
  return name.toUpperCase()
})
console.log(uppCaseNames)

// 10. Use map to map the products array to its corresponding prices.
const prices = products.map(product => {
  return `${product.product}:${product.price}`
})
console.log(prices)

// 11. Use filter to filter out countries containing land.
const filterdCountries = countries.filter(item => {
  if (item.search(/land/gi) !== -1) return item
})

console.log(filterdCountries)

// 12. Use filter to filter out countries having six character.
const countriesWith6chars = countries.filter(country => {
  return country.length === 6
})
console.log(countriesWith6chars)

// 13. Use filter to filter out countries containing six letters and more in the country array.
const countriesWith6charsMore = countries.filter(country => {
  return country.length >= 6
})
console.log(countriesWith6charsMore)

// 14. Use filter to filter out country start with 'E';
const countriesStartingWithE = countries.filter(item => {
  if (item.startsWith('E')) return item
})
console.log(countriesStartingWithE)

// 15. Use filter to filter out only prices with values.
const pricesWithValues = products.filter(item => {
  if (item.price > 0) return item
})
console.log(pricesWithValues)

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
let getStringLists = arr => {
  return arr.filter(item => {
    if (typeof item === 'string') return item
  })
}
console.log(getStringLists([1, 2, 3, 4, [1, 2, 3], 'a', 'b', 'c']))

// 17. Use reduce to sum all the numbers in the numbers array.
let sum = numbers.reduce((total, value) => (total += value), 0)
console.log(sum)

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let countryString = 'Estonia, '
countryString = countries.reduce((total, value) => {
  if (value === 'IceLand') {
    return (total += `and ${value} are north European countries`)
  } else {
    return (total += `${value}, `)
  }
}, countryString)
console.log(countryString)

// 19. Explain the difference between some and every
// every checks if all elements in an array are similar in all aspects
// some checks if some elements are elements are similar in one aspect

// 20. Use some to check if some names' length greater than seven in names array
console.log(
  names.some(item => {
    return item.length > 7
  })
)

// 21. Use every to check if all the countries contain the word land
console.log(
  countries.every(item => {
    if (item.search(/land/gi) !== -1) return true
  })
)

// 22. Explain the difference between find and findIndex.
// find returns the first element which satisfies the condition
// findIndex returns the first index elemnt whic satisfiy the condition

// 23. Use find to find the first country containing only six letters in the countries array
console.log(
  countries.find(item => {
    return item.length == 6
  })
)

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(
  countries.findIndex(item => {
    return item.length == 6
  })
)

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(
  countries.findIndex(item => {
    return item === 'Norway'
  })
)

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(
  countries.findIndex(item => {
    return item === 'Russia'
  })
)
