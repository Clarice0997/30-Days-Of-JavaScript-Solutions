// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
ages.sort((a, b) => {
  return a - b
})
console.log(ages)
console.log(Math.min(...ages))
console.log(Math.max(...ages))

// Find the median age(one middle item or two middle items divided by two)
let half = Math.floor(ages.length / 2)

if (ages.length % 2 === 0) {
  const middleA = ages[half - 1]
  const middleB = ages[half]
  const median = (middleA + middleB) / 2
  console.log(median)
} else {
  const median = ages[half]
  console.log(median)
}

// Find the average age(all items divided by number of items)
const sum = ages.reduce((total, item) => {
  return (total += item)
}, 0)
const average = sum / ages.length
console.log(average)

// Find the range of the ages(max minus min)
const max = Math.max(...ages)
const min = Math.min(...ages)
const range = max - min

console.log(range)

// Compare the value of (min - average) and (max - average), use abs() method
const diffMin = Math.abs(min - average)
const diffMax = Math.abs(max - average)

console.log(diffMax)
console.log(diffMin)

// 2. Slice the first ten countries from the countries array
console.log(countries.slice(0, 10))
// 3. Find the middle country(ies) in the countries array
console.log(countries[Math.floor(countries.length / 2)])
// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let halfIndex = countries.length % 2 === 0
let firstArray = []
let SecondArray = []

if (halfIndex) {
  firstArray = countries.slice(0, countries.length / 2 + 1)
  SecondArray = countries.slice(countries.length / 2 + 1)
} else {
  firstArray = countries.slice(0, Math.ceil(countries.length / 2) + 1)
  SecondArray = countries.slice(Math.ceil(countries.length / 2) + 1)
}

console.log(firstArray)
console.log(SecondArray)
