// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
// Sort By name
function sortByName(data) {
  return data.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    } else if (a.name < b.name) {
      return -1
    } else {
      return 0
    }
  })
}
console.group('Name')
console.log(sortByName(countries_data))
console.groupEnd()

// Sort by capital
function sortByCapital(data) {
  return data.sort((a, b) => {
    if (a.capital > b.capital) {
      return 1
    } else if (a.capital < b.capital) {
      return -1
    } else {
      return 0
    }
  })
}
console.group('Capital')
console.log(sortByCapital(countries_data))
console.groupEnd()

// Sort by population
function sortByPopulation(data) {
  return data.sort((a, b) => {
    return b.population - a.population
  })
}
console.group('Population')
console.log(sortByPopulation(countries_data))
console.groupEnd()

// 2. Find the 10 most spoken languages
function mostSpokenLanguages(data, topNum) {
  let arr = []
  data.forEach(element => {
    arr = arr.concat(element.languages)
  })
  let arrMap = new Set(arr)
  let counts = []

  for (const variable of arrMap) {
    const filterItem = arr.filter(item => item === variable)
    counts.push({ country: variable, count: filterItem.length })
  }

  return counts
    .sort((a, b) => {
      return b.count - a.count
    })
    .slice(0, topNum)
}
console.table(mostSpokenLanguages(countries_data, 10))

// 3. Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(data, topNum) {
  let counts = []

  data.forEach(item => {
    counts.push({ country: item.name, population: item.population })
  })

  return counts
    .sort((a, b) => {
      return b.population - a.population
    })
    .slice(0, topNum)
}
console.table(mostPopulatedCountries(countries_data, 10))

// 4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
  ages: [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
  count: function () {
    return this.ages.length
  },
  sum: function () {
    return this.ages.reduce((total, value) => (total += value), 0)
  },
  min: function () {
    return Math.min(...this.ages)
  },
  max: function () {
    return Math.max(...this.ages)
  },
  range: function () {
    return this.max() - this.min()
  },
  mean: function () {
    return this.sum() / this.count()
  },
  median: function () {
    if (this.count() % 2 === 0) {
      return (Math.ceil(this.count() / 2) + Math.floor(this.count() / 2)) / 2
    } else {
      return Math.ceil(this.count() / 2)
    }
  },
  mode: function () {
    let letterMap = new Set(this.ages)
    let counts = []

    for (const variable of letterMap) {
      const filterItem = this.ages.filter(item => item === variable)
      counts.push({ mode: variable, count: filterItem.length })
    }

    return counts
      .sort((a, b) => {
        return b.count - a.count
      })
      .slice(0, 1)
  },
  var: function () {
    let variance = 0
    this.ages.forEach(item => {
      variance += (item - this.mean()) ** 2
    })
    variance /= this.count()
    return variance.toFixed(1)
  },
  std: function () {
    return Math.sqrt(this.var()).toFixed(1)
  },
  freqDist: function () {
    let agesSet = new Set(this.ages)
    let counts = []
    let Frequency = 100 / this.count()

    for (const variable of agesSet) {
      const filterArr = this.ages.filter(item => variable === item)
      counts.push([(filterArr.length * Frequency).toFixed(1), variable])
    }

    return counts.sort((a, b) => Number(b[0]) - Number(a[0]))
  },
  describe: function () {}
}

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ', statistics.freqDist())
