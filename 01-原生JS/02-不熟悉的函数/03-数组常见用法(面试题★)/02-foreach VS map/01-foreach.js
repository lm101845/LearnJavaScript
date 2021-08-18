let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// arr.forEach((num, index) => {
// //   return (arr[index] = num * 2)
//   // [ 2, 4, 6, 8, 10 ]
//   //这样写原数组被改变了
    
//     // return num * 2;
//     // 这样写原数组arr没有被改变

//     // console.log('哈哈');
//     return newArr = num
// })

console.log(arr);
// [1, 2, 3, 4, 5];

// console.log(newArr);
// 5

console.log(arr.forEach((num) => num));  //undefined
console.log(arr === arr.forEach(num => num));  //false
//foreach会修改原来的数组，而map方法会得到一个新的数组并返回。
console.log(arr == arr.map(num=>num));  //false
console.log(arr === arr.map(num=>num));  //false

