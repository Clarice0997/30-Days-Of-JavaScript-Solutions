// 1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanText = str => {
  const reg = /[%$@&#;.,!?]/gi
  str = str.replace(reg, '')
  const wordArr = str.split(' ')
  const wordSet = new Set(wordArr)
  const count = []

  for (const variable of wordSet) {
    const filterArr = wordArr.filter(item => item === variable)
    count.push({ word: variable, count: filterArr.length })
  }

  return count
    .sort((a, b) => {
      if (a.count === b.count) {
        return a.word.length >= b.word.length ? -1 : 1
      } else {
        return b.count - a.count
      }
    })
    .slice(0, 3)
}
console.log(cleanText(sentence))
