// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
const tenMostFrequentWords = (str, topNum) => {
  const reg = /[.]/gi
  str = str.replace(reg, '').toLowerCase()
  const wordArr = str.split(' ')
  const wordSet = new Set(wordArr)
  const count = []

  for (const variable of wordSet) {
    const filterArr = wordArr.filter(item => item === variable)
    count.push({ word: variable, count: filterArr.length })
  }

  return count.sort((a, b) => b.count - a.count).slice(0, topNum ? topNum : undefined)
}

console.log(tenMostFrequentWords(paragraph))
console.log(tenMostFrequentWords(paragraph, 10))
