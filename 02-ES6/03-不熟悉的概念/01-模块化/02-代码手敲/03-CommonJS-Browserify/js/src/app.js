/*
 * @Author: liming
 * @Date: 2021-08-02 18:25:33
 * @LastEditTime: 2021-08-02 18:39:02
 * @FilePath: \01-模块化\02-代码手敲\03-CommonJS-Browserify\js\src\app.js
 */

//将其他的模块汇集到主模块
let module1 = require("./module1");
let module2 = require("./module2");
let module3 = require("./module3");

module1.foo();
module2();
module3.foo();
module3.bar();