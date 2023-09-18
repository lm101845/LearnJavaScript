/**
 * @Author liming
 * @Date 2023/9/18 21:30
 **/
export default {}

class Point1 {
  x = 0
  // y = 0
  y = 1   //照样可以
}

class Point2 {
  x = 0
  y = 0
}

const p1: Point1 = new Point2()


class Person {
  name: string = ''
  age: number = 100
}

class Emplyee {
  name: string = 'felixlu'
  age: number = 23
  salary: number = 10
}

const p2: Person = new Emplyee()


class Empty {

}

function fn(x: Empty) {

}

fn(window)
fn({})
fn(fn)
fn(100)
