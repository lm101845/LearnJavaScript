/**
 * @Author liming
 * @Date 2023/7/21 13:51
 **/
function greet(person:{name:string,age:number}){
    return 'Hello ' + person.name
}

interface Person {
  name: string
  age: number
}

function greet1(person: Person) {
  return 'Hello ' + person.name
}

type People = {
  name: string
  age: number
}

function greet2(person: People) {
  return 'Hello ' + person.name
}
