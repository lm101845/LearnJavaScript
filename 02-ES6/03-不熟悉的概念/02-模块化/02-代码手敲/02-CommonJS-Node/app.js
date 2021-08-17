/*
 * @Author: liming
 * @Date: 2021-08-02 17:56:46
 * @LastEditTime: 2021-08-02 18:16:27
 * @FilePath: \01-模块化\02-代码手敲\02-CommonJS-Node\app.js
 */

//注意：当你引入第三方库的时候，要放到自定义库的【上面】！！！
let uniq = require("uniq");

//将其他的模块汇集到主模块
let module1 = require("./modules/module1");
let module2 = require("./modules/module2");
let module3 = require("./modules/module3");

module1.foo();
module2();
module3.foo();
module3.bar();

let result = uniq(module3.arr)
console.log(result);