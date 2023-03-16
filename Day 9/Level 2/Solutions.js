// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// arr.map & .filter & .reduce
let totalPrice = products
  .map(item => {
    return item.price
  })
  .filter(item => {
    if (item > 0) return item
  })
  .reduce((total, value) => (total += value), 0)
console.log(totalPrice)

// 2. Find the sum of price of products using only reduce reduce(callback))
totalPrice = products.reduce((total, value) => {
  return (total += Number(value.price))
}, 0)
console.log(totalPrice)

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = () => {
  return countries.filter(country => {
    return country.toLowerCase().includes('ia') || country.toLowerCase().includes('island') || country.toLowerCase().includes('land') || country.toLowerCase().includes('stan')
  })
}
console.log(categorizeCountries())

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countStringNum(str) {
  let letterSplice = str.split('')
  let letterMap = new Set(letterSplice)
  let counts = []

  for (const variable of letterMap) {
    const filterItem = letterSplice.filter(item => item === variable)
    counts.push({ letter: variable, count: filterItem.length })
  }

  return counts
}
console.log(countStringNum('Oceania'))

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries() {
  return countries.filter((item, index) => {
    if (index < 10) return item
  })
}
console.log(getFirstTenCountries())

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
  let lastTen = countries.length - 11
  return countries.filter((item, index) => {
    if (index > lastTen) return item
  })
}
console.log(getLastTenCountries())

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function mostUsedLetter(arr) {
  let str = arr.join('')
  let letterSplice = str.split('')
  let letterMap = new Set(letterSplice)
  let letters = []
  let counts = []

  for (const variable of letterMap) {
    const filterItem = letterSplice.filter(item => item === variable)
    letters.push(variable)
    counts.push(filterItem.length)
  }

  return letters[counts.indexOf(Math.max(...counts))]
}
console.log(mostUsedLetter(['Finland', 'Fiji', 'France'])) // F
