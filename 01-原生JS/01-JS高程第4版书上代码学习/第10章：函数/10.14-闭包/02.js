/*
 * @Author: liming
 * @Date: 2021-09-02 10:30:23
 * @LastEditTime: 2021-09-02 10:30:24
 * @FilePath: \01-JS高程第4版书上代码学习\第10章：函数\10.14-闭包\02.js
 */
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
let result = compare(5, 10);
console.log(result);  //-1