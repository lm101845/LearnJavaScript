"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author liming
 * @Date 2022/10/5 20:49
 **/
exports.default = {};
//使用泛型定义一个函数
function log(value) {
    console.log(value);
    return value;
}
//写法1：
log(['a', 'b']);
//写法2：使用类型推断
log(['a', 'b']);
let myLog = log;
let myLog3 = log;
let myLog4 = log;
myLog4("1");
