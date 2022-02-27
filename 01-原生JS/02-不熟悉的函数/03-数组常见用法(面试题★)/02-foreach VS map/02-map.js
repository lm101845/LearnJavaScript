/*
 * @Author: liming
 * @Date: 2021-08-19 05:53:13
 * @LastEditTime: 2021-08-19 06:03:01
 * @FilePath: \02-foreach VS map\02-map.js
 */

let arr = [1, 2, 3, 4, 5];
arr.map((num, index) => {
  return (arr[index] = num * 2)
  // [ 2, 4, 6, 8, 10 ]
  //这样写原数组也被改变了
    
    // return num * 2;
    // 这样写原数组arr没有被改变

    // console.log('哈哈');
})

console.log(arr);
// [1, 2, 3, 4, 5];

// console.log(newArr);
// 5