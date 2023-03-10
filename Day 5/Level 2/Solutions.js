// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the
let webTechs = ['html', 'css', 'javascript', 'vue', 'react', 'mongodb', 'angular']
let countries = ['nigeria', 'china', 'italy', 'canada', 'lebanon']

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ')
words = words.map(item => {
  return item.replace(/[,'.]/g, '')
})
console.log(words)
console.log(words.length)

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart[0] !== 'Meat') {
  shoppingCart.unshift('Meat')
}
// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart[shoppingCart.length - 1] !== 'Sugar') {
  shoppingCart.push('Sugar')
}

// remove 'Honey' if you are allergic to honey
let index = shoppingCart.indexOf('Honey')
if (index !== -1) {
  shoppingCart.splice(index, 1)
}

// modify Tea to 'Green Tea'
index = shoppingCart.indexOf('Tea')
if (index !== -1) {
  shoppingCart[index] = 'Green Tea'
}

console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.indexOf('Ethiopia') == -1) {
  countries.push('Ethiopia')
} else {
  console.log('ETHIOPIA')
}
console.log(countries)

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.indexOf('Sass') == -1) {
  webTechs.push('Sass')
} else {
  console.log('Sass is a CSS preprocess')
}
console.log(webTechs)

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
