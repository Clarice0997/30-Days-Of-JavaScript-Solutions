// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(str.match(/love/gi).length) // 3

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(str1.match(/because/gi).length) // 3

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// method 1: array
function findMostWord1(raw) {
  let str = raw.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
  // trim & split create word array
  str = str.trim()
  let wordArray = str.split(' ')

  // defined wordNameArray && wordCountArray
  let wordNameArray = []
  let wordCountArray = []

  // find each word and push to array
  wordArray.forEach(item => {
    let index = wordNameArray.indexOf(item)
    if (index === -1) {
      wordNameArray.push(item)
      wordCountArray.push(1)
    } else {
      wordCountArray[index]++
    }
  })

  // find the most frequent word and it's occurrence times
  let mostFrequentWordArray = []
  let maxCount = Math.max(...wordCountArray)

  wordCountArray.forEach((item, index) => {
    if (item === maxCount) mostFrequentWordArray.push(wordNameArray[index])
  })

  return {
    mostFrequentWordArray,
    maxCount
  }
}

console.log(findMostWord1(sentence))

// method 2: object
function findMostWord2(raw) {
  let str = raw.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
  str = str.trim()
  let wordArray = str.split(' ')

  let item

  let obj = {}
  for (let i = 0; i < wordArray.length; i++) {
    item = wordArray[i]
    obj[item] = obj[item] + 1 || 1
  }

  let arrName = []
  let arrNum = Object.values(obj)
  let max = Math.max(...arrNum)

  for (let key in obj) {
    if (obj[key] === max) {
      arrName.push(key)
    }
  }

  return {
    arrName,
    max
  }
}

console.log(findMostWord2(sentence))

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salarys = salary.match(/\d+/g)
console.log(salarys)
let totalIncome = 0
salarys.forEach(item => {
  if (item !== '10000') {
    totalIncome += Number(item) * 12
  } else {
    totalIncome += 10000
  }
})
console.log(totalIncome)
