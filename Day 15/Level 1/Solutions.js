// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
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

const cat = new Animal('Cat', 8, 'White', 4)
console.log(cat)
console.log(cat.getName)
console.log((cat.setColor = 'Black'))
console.log(cat.Animal())

// 2. Create a Dog and Cat child class from the Animal Class.
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
}

class Cat extends Animal {
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
}

const sweet = new Cat('Kitty', 8, 'White', 4, 'Abyssinian')
console.log(sweet)
console.log(sweet.getType)

const Poodle = new Dog('Doggy', 8, 'Black', 4, 'Poodle')
console.log(Poodle)
console.log(Poodle.getType)
