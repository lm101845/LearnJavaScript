/*
 * @Author: liming
 * @Date: 2021-08-02 17:56:19
 * @LastEditTime: 2021-08-02 18:13:42
 * @FilePath: \01-模块化\02-代码手敲\02-CommonJS-Node\modules\module1.js
 */

//module.exports = value  暴露一个对象

module.exports = {
    msg: 'module1',
    foo() {
        console.log(this.msg);
    }
}

module.exports = {
    // 这个将前面的给覆盖掉了
  msg: "module2222222222222",
  foo() {
    console.log(this.msg);
  },
};