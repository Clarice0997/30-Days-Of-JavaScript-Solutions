// 1. Using console.log() print out the following statement:
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// 2. Using console.log() print out the following quote by Mother Teresa:
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === typeof 10)
console.log(typeof Number('10') === typeof 10)

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') === 10)
console.log(Math.ceil(parseFloat('9.8')) === 10)

// 5. Check if 'on' is found in both python and jargon
let arr = ['python', 'jargon']
let index = arr.every(item => {
  return item.search('on') != -1
})
console.log(index)

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let str = 'I hope this course is not full of jargon.'
console.log(str.search('jargon') != -1 ? true : false)

// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.ceil(Math.random() * 100))

// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.ceil(Math.random() * 50) + 50)

// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.ceil(Math.random() * 255))

// 10. Access the 'JavaScript' string characters using a random number.
let str1 = 'JavaScript'
console.log(str1.charAt(Math.floor(Math.random() * str1.length)))

// 11. Use console.log() and escape characters to print the following pattern.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str2 = 'You cannot end a sentence with because because because is a conjunction'
let string = `${str2.slice(0, 31)}${str2.slice(55)}`
console.log(string)
