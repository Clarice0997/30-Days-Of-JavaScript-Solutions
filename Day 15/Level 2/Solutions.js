// 1. Override the method you create in Animal class
class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  get getName() {
    return this.name
  }
  get getAge() {
    return this.age
  }
  get getColor() {
    return this.color
  }
  get getLegs() {
    return this.legs
  }
  set setName(val) {
    this.name = val
  }
  set setAge(val) {
    this.age = val
  }
  set setColor(val) {
    this.color = val
  }
  set setLegs(val) {
    this.legs = val
  }
  Animal() {
    return this
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, type) {
    super(name, age, color, legs)
    this.type = type
  }
  get getType() {
    return this.type
  }
  set setType(val) {
    this.type = val
  }
  Animal() {
    return `It's a ${this.getType}`
  }
}

const Poodle = new Dog('Doggy', 8, 'Black', 4, 'Poodle')
console.log(Poodle)
console.log(Poodle.Animal())
