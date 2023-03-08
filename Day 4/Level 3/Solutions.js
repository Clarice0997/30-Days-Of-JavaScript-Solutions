// 1. Write a program which tells the number of days in a month.
// let month = prompt('Enter a month:').toLowerCase()
// switch (month) {
//   case 'january':
//   case 'march':
//   case 'may':
//   case 'july':
//   case 'august':
//   case 'october':
//   case 'december':
//     console.log(`${month} has 31 days`)
//     break
//   case 'april':
//   case 'june':
//   case 'september':
//   case 'november':
//     console.log(`${month} has 30 days`)
//     break
//   case 'febuary':
//     console.log(`${month} has 29 days`)
//     break
//   default:
//     console.log('invalid month entered')
// }

// 2. Write a program which tells the number of days in a month, now consider leap year.
let month = prompt('Enter a month:').toLowerCase()
let year = Number(prompt('Enter a year:'))
switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${month} has 31 days`)
    break
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${month} has 30 days`)
    break
  case 'february':
    if (year % 4 === 0) {
      console.log(`${month} has 29 days`)
    } else {
      console.log(`${month} has 28 days`)
    }
    break
  default:
    console.log('invalid month entered')
}
