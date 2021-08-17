/*
 * @Author: liming
 * @Date: 2021-08-02 17:56:19
 * @LastEditTime: 2021-08-02 18:16:57
 * @FilePath: \01-模块化\02-代码手敲\02-CommonJS-Node\modules\module3.js
 */

//exports.xxx = values


//换一种暴露方式
exports.foo = function () {
    console.log('foo() module3');
}

exports.bar = function () {
  console.log("bar() module3");
};

exports.arr = [2,4,5,2,3,5,11]