/*
 * @Author: liming
 * @Date: 2021-08-19 06:03:21
 * @LastEditTime: 2021-08-19 06:24:41
 * @FilePath: \02-foreach VS map\03-foreach.js
 */
let arr = [1, 2, 3, 4, 5];
const result = arr.forEach(item => {
    return item*2
})
console.log(arr);
// [1, 2, 3, 4, 5];
// forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。
console.log(result);
//undefined

//forEach:对数组每一项都运行传入的函数，【没有返回值】 => JS高程
//forEach方法不会返回执行结果，而是undefined

const arr2 = [1];
const new_arr = arr2.forEach(d => d);
console.log(arr2 === new_arr);; // false

console.log([1, 2, 3].forEach(d => d + 1))// undefined  forEach方法不会返回执行结果，而是undefined
console.log([1,2,3].map(d => d + 1))// [2, 3, 4];);
// forEach()会修改原来的数组(什么意思？怎么修改的？？)。而map()方法会得到一个新的数组并返回。——应该是这个意思吧

// 因为这两个的区别主要在于是不是返回了一个值， 所以需要生成新数组的时候， 就用map, 其他的就用forEach.
