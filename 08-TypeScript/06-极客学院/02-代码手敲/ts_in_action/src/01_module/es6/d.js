"use strict";
/**
 * @Author liming
 * @Date 2022/10/22 14:16
 **/
module.exports = function () {
    console.log("I'm default11111111");
};
//这个语法会被编译为module.exports,就是顶级导出了
//此时就不能有其他导出了
// export let a = 1
