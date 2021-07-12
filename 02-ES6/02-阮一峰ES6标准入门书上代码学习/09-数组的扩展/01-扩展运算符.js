console.log(...[1, 2, 3]);

console.log(1, ...[2, 3, 4], 5);

function push(arr, ...items) {
  arr.push(...items);
}

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
console.log(add(...numbers));

// console.log(push(numbers));
