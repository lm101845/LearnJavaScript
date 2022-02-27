/*
 * @Author: liming
 * @Date: 2021-08-02 18:25:10
 * @LastEditTime: 2021-08-02 18:34:10
 * @FilePath: \01-模块化\02-代码手敲\03-CommonJS-Browserify\js\src\module3.js
 */
//换一种暴露方式
exports.foo = function () {
    console.log('foo() module3');
}

exports.bar = function () {
  console.log("bar() module3");
};

exports.arr = [2,4,5,2,3,5,11]