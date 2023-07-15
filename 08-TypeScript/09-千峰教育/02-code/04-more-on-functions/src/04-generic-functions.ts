// function firstElement(arr: any[]) {
//   return 100
// }
//
// firstElement(['a', 'b', 'c'])

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}

console.log(firstElement(['a', 'b', 'c']))
console.log(firstElement([1, 2, 3]))
console.log(firstElement([]))


 function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func)
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n))
console.log(parsed)
