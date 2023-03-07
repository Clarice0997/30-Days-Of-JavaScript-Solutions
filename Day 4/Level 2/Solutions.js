// 1. Write a code which  can give grades to students according to theirs scores
// let score = Number(prompt('Enter a score:'))
// if (score <= 100 && score >= 90) {
//   alert('A')
// } else if (score < 90 && score >= 70) {
//   alert('B')
// } else if (score < 70 && score >= 60) {
//   alert('C')
// } else if (score < 60 && score >= 50) {
//   alert('D')
// } else {
//   alert('E')
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer.
// let season = prompt('Enter a season:').toLowerCase()
// if (season === 'march' || season === 'april' || season === 'may') {
//   alert('Spring')
// } else if (season === 'june' || season === 'july' || season === 'august') {
//   alert('Summer')
// } else if (season === 'september' || season === 'october' || season === 'november') {
//   alert('Autumn')
// } else {
//   alert('Winter')
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('Enter a season:').toLowerCase()
if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
  alert(`${day[0].toUpperCase() + day.slice(1)} is a working day`)
} else if (day === 'saturday' || day === 'sunday') {
  alert(`${day[0].toUpperCase() + day.slice(1)} is a weekend`)
} else {
  alert("it's not a day")
}
