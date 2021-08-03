/*
 * @Author: liming
 * @Date: 2021-08-02 18:25:10
 * @LastEditTime: 2021-08-02 18:33:51
 * @FilePath: \01-模块化\02-代码手敲\03-CommonJS-Browserify\js\src\module1.js
 */
module.exports = {
  msg: "module1",
  foo() {
    console.log(this.msg);
  },
};

module.exports = {
  // 这个将前面的给覆盖掉了
  msg: "module2222222222222",
  foo() {
    console.log(this.msg);
  },
};