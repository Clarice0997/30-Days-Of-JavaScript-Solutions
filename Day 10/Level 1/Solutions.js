const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
// 1. create an empty set
let newSet = new Set()

// 2. Create a set containing 0 to 10 using loop
for (let index = 0; index <= 10; index++) {
  newSet.add(index)
}
console.log(newSet) // Set(11) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// 3. Remove an element from a set
console.log(newSet.delete(10)) // true
console.log(newSet) // Set(10) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }

// 4. Clear a set
newSet.clear()
console.log(newSet) // Set(0) {}

// 5. Create a set of 5 string elements from array
let strSet = new Set(['a', 'b', 'c', 'd', 'e'])
console.log(strSet) // Set(5) { 'a', 'b', 'c', 'd', 'e' }

// 6. Create a map of countries and number of characters of a country
let countriesMap = new Map(
  countries.map(item => {
    return [item, item.length]
  })
)
console.log(countriesMap)
