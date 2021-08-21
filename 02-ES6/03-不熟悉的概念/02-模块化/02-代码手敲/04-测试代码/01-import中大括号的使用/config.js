/*
 * @Author: liming
 * @Date: 2021-08-21 16:49:48
 * @LastEditTime: 2021-08-21 20:16:11
 * @FilePath: \01-import中大括号的使用\config.js
 */


const num = 1;
let max = 50000;
const banks = ["中国银行", "建设银行"];
const min = 20;   //这个变量没有暴露出去
// 使用export导出变量
export {
  num,
  max as maxMoney, //可以用as关键字起别名
  banks,
};