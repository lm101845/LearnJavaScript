type ABC = { a: number, b: number, c: number }

interface aaa{
  a: number
  b: number
  c: number
}
function sum({ a, b, c }: ABC) {
// function sum({ a, b, c }: aaa) {
  console.log(a + b + c)
}

sum({
  a: 10,
  b: 30,
  c: 9
})
