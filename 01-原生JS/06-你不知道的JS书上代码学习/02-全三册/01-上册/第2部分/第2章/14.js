/**
 * @Author liming
 * @Date 2024/5/23 9:29
 **/
"use strict"; // 防止 `this` 被封装到到包装对象中

function log(...args1) {
    console.log(this, ...args1);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6

//bind(..) 会返回一个硬编码的新函数，它会把参数设置为 this 的上下文并调用原始函数。