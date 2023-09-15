interface SomeType {
  readonly prop: string
}

function doSomething(obj: SomeType) {
  console.log(obj.prop)
  // obj.prop = 'hello'
}



interface Home {
  readonly resident: {
    //resident对象本身不能重写，但里面的属性可以重写，和const一样
    name: string
    age: number
  }
}

function visitForBirthday(home: Home) {
  console.log(home.resident.name)
  home.resident.age++
  //这里和const一样
}

function evict(home: Home) {
  // home.resident = {
  //   name: 'Felix',
  //   age: 18
  // }
}



interface Person {
  name: string
  age: number
}

interface ReadonlyPerson {
  readonly name: string
  readonly age: number
}

let writablePerson: Person = {
  name: 'Felix',
  age: 18
}

let readonlyPerson: ReadonlyPerson = writablePerson

console.log(readonlyPerson.age)
writablePerson.age++
console.log(readonlyPerson.age)
