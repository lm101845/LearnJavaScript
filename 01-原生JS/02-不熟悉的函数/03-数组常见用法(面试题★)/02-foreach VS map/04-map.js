/*
 * @Author: liming
 * @Date: 2021-08-19 06:06:33
 * @LastEditTime: 2021-08-19 06:18:10
 * @FilePath: \02-foreach VS map\04-map.js
 */
let arr = [1, 2, 3, 4, 5];
const result = arr.map((num, index) => {
    return (arr[index] = num * 2)
})

console.log(arr);
//[ 2, 4, 6, 8, 10 ]
// forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。？？？？？？？？这篇博文讲的对不对啊。。。。
// 不对不对，应该是我理解错了，不能看数值相等就觉得2者相等。== 和===的区别。
console.log(result);
//[ 2, 4, 6, 8, 10 ]

const arr2 = [1];
const new_arr = arr2.map(d => d);
console.log(arr2 === new_arr);; // false
// map()方法会得到一个新的数组并返回